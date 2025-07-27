import React from 'react';
import Button from '@/components/Button';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 bg-white dark:bg-black">
      <h1 className="text-2xl font-bold mb-6">Đăng nhập</h1>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Button size="medium" variant="secondary">
          Đăng nhập
        </Button>
        <Button size="medium" variant="primary">
          Đăng ký
        </Button>
        <Button size="medium" variant="secondary">
          Quên mật khẩu?
        </Button>
      </div>
    </div>
  );
}
