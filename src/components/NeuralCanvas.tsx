import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glow: string;
  pulseTimer: number;
  layer: number; // 0 = far, 1 = mid, 2 = near
}

interface SignalPacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

export const NeuralCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    // Initialize nodes
    const nodeCount = Math.min(Math.floor((width * height) / 12000), 80);
    let nodes: Node[] = [];
    let packets: SignalPacket[] = [];

    const colors = [
      { fill: '#38bdf8', glow: 'rgba(56, 189, 248, 0.4)' }, // Cyan
      { fill: '#818cf8', glow: 'rgba(129, 140, 248, 0.4)' }, // Indigo
      { fill: '#c084fc', glow: 'rgba(192, 132, 252, 0.4)' }, // Purple
      { fill: '#34d399', glow: 'rgba(52, 211, 153, 0.4)' },  // Emerald
    ];

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        const col = colors[Math.floor(Math.random() * colors.length)];
        const layer = Math.random() < 0.3 ? 0 : Math.random() < 0.7 ? 1 : 2;
        const radius = layer === 0 ? 1.5 : layer === 1 ? 2.5 : 3.5;
        const speedMultiplier = layer === 0 ? 0.3 : layer === 1 ? 0.5 : 0.7;

        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * speedMultiplier,
          vy: (Math.random() - 0.5) * speedMultiplier,
          radius,
          color: col.fill,
          glow: col.glow,
          pulseTimer: 0,
          layer,
        });
      }
      packets = [];
    };

    initNodes();

    // Random signal packet creator
    let packetTimer = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Spawn signal packets along connections autonomously
      packetTimer++;
      if (packetTimer % 40 === 0 && packets.length < 16 && nodes.length > 2) {
        const fromIdx = Math.floor(Math.random() * nodes.length);
        // Find closest neighbor
        let closestIdx = -1;
        let minDist = 140;
        for (let j = 0; j < nodes.length; j++) {
          if (fromIdx === j) continue;
          const dx = nodes[fromIdx].x - nodes[j].x;
          const dy = nodes[fromIdx].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < minDist) {
            minDist = dist;
            closestIdx = j;
          }
        }
        if (closestIdx !== -1) {
          packets.push({
            fromNode: fromIdx,
            toNode: closestIdx,
            progress: 0,
            speed: 0.012 + Math.random() * 0.018,
            color: nodes[fromIdx].color,
          });
        }
      }

      // Update & Draw Synaptic Connections
      const maxConnectDistance = 140;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDistance) {
            const opacity = (1 - dist / maxConnectDistance) * 0.3;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Update & Draw Signal Packets (Action Potentials)
      for (let i = packets.length - 1; i >= 0; i--) {
        const pkt = packets[i];
        pkt.progress += pkt.speed;
        if (pkt.progress >= 1) {
          // Trigger pulse on target node
          if (nodes[pkt.toNode]) {
            nodes[pkt.toNode].pulseTimer = 20;
          }
          packets.splice(i, 1);
          continue;
        }

        const from = nodes[pkt.fromNode];
        const to = nodes[pkt.toNode];
        if (!from || !to) {
          packets.splice(i, 1);
          continue;
        }

        const curX = from.x + (to.x - from.x) * pkt.progress;
        const curY = from.y + (to.y - from.y) * pkt.progress;

        ctx.beginPath();
        ctx.arc(curX, curY, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = pkt.color;
        ctx.shadowColor = pkt.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Update & Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move node
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges gently
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw node body
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = node.layer === 2 ? 10 : 4;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Pulse activation wave
        if (node.pulseTimer > 0) {
          node.pulseTimer--;
          const pulseRadius = Math.max(0.1, node.radius + (20 - Math.min(20, node.pulseTimer)) * 1.2);
          const pulseAlpha = Math.min(1, Math.max(0, node.pulseTimer / 20));
          ctx.beginPath();
          ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(56, 189, 248, ${pulseAlpha * 0.7})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full opacity-65 transition-opacity duration-1000"
      style={{ zIndex: 1 }}
    />
  );
};
