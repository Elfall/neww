import React from 'react';

export const Select: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>{children}</div>
);

export const SelectTrigger: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const SelectValue: React.FC<{ placeholder: string }> = ({ placeholder }) => (
  <span>{placeholder}</span>
);

export const SelectContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>{children}</div>
);

export const SelectItem: React.FC<{ children: React.ReactNode; value: string }> = ({ children, value }) => (
  <div>{children}</div>
);