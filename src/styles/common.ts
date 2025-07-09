import clsx from 'clsx';

export const buttonStyle = (primary: boolean, disabled: boolean) =>
  clsx(
    'py-2 px-4 rounded', // Class cơ bản
    {
      'bg-blue-500 text-white': primary, // Dành cho button chính (primary)
      'bg-gray-400 text-gray-700 cursor-not-allowed': disabled, // Dành cho button disabled
    },
  );

export const cardStyle = (isFeatured: boolean, isLarge: boolean) =>
  clsx(
    'border p-4 rounded-lg', // Class cơ bản
    {
      'bg-yellow-200': isFeatured, // Nếu là featured card
      'w-full': isLarge, // Nếu là card lớn
    },
  );

// Thêm các style khác tùy nhu cầu
