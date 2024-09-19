import React from 'react';

export const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>{children}</div>
);

export const Tooltip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>{children}</div>
);

export const TooltipTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children, asChild }) => (
  <div>{children}</div>
);

export const TooltipContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>{children}</div>
);