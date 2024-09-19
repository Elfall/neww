import React from 'react';

export const Tabs: React.FC<{ children: React.ReactNode; defaultValue: string; className?: string }> = ({ children, defaultValue, className }) => (
  <div className={className}>{children}</div>
);

export const TabsList: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const TabsTrigger: React.FC<{ children: React.ReactNode; value: string; className?: string }> = ({ children, value, className }) => (
  <button className={className}>{children}</button>
);

export const TabsContent: React.FC<{ children: React.ReactNode; value: string; className?: string }> = ({ children, value, className }) => (
  <div className={className}>{children}</div>
);