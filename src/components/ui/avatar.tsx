import React from 'react';

interface AvatarProps {
  children: React.ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({ children }) => {
  return (
    <div className="relative w-8 h-8 rounded-full overflow-hidden">
      {children}
    </div>
  );
};

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const AvatarImage: React.FC<AvatarImageProps> = (props) => {
  return <img className="w-full h-full object-cover" {...props} />;
};

interface AvatarFallbackProps {
  children: React.ReactNode;
}

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({ children }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-600">
      {children}
    </div>
  );
};