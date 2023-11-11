'use client';
import type { ProfileInfo } from 'src/types/ProfileInfo';

export const ProfileCard = ({
  title,
  description,
  image,
  link,
  linkName,
}: ProfileInfo) => (
  <div className="w-1/3 flex flex-col gap-4 mb-6">
    {image && <img src={image} />}
    <h4 className="font-header text-lg font-medium">{title}</h4>
    {description && (
      <p className="font-body text-sm whitespace-pre-line">{description}</p>
    )}
    {link && (
      <button
        type="button"
        onClick={() => {
          window.open(link, '_blank');
        }}
        className="mt-4"
      >
        {linkName || 'Website'}
      </button>
    )}
  </div>
);
