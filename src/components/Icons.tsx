import React from 'react';

export const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const CodeChefIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    {/* CodeChef Chef's Toque Hat Silhouette */}
    <path d="M12 2C9.24 2 7 3.94 6.32 6.54A4.5 4.5 0 0 0 3 10.75c0 2.2 1.58 4.02 3.68 4.41.38 1.06 1.02 1.99 1.85 2.68L8 21h8l-.53-3.16c.83-.69 1.47-1.62 1.85-2.68C19.42 14.77 21 12.95 21 10.75a4.5 4.5 0 0 0-3.32-4.21C17 3.94 14.76 2 12 2zm-3.5 17h7v1h-7v-1zm-.1-3c-.56-.56-.99-1.28-1.24-2.07l-.16-.53-.55-.09A2.5 2.5 0 0 1 5 10.75c0-1.38 1.12-2.5 2.5-2.5l.65.04.28-.59C8.97 6.44 10.36 4 12 4s3.03 2.44 3.57 3.7l.28.59.65-.04c1.38 0 2.5 1.12 2.5 2.5 0 1.25-.92 2.3-2.16 2.46l-.55.09-.16.53c-.25.79-.68 1.51-1.24 2.07l-.89.8H9.4l-.89-.8z" />
  </svg>
);
