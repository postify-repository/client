"use client";

import MainContent from "@/components/common/main-content";
import ActionButton from "@/components/notifications/ActionButton";
import ReadFilterButton from "@/components/notifications/ReadFilterButton";

export default function NotificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleMarkAllAsRead = () => {
    // TODO: 모두 읽음 API 호출
  };

  const handleDeleteAll = () => {
    // TODO: 모두 삭제 API 호출
  };

  return (
    <MainContent>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">알림</h1>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <ReadFilterButton href="/notifications">전체</ReadFilterButton>
            <ReadFilterButton href="/notifications/not-read">
              읽지 않음
            </ReadFilterButton>
          </div>
          <div className="flex gap-2 text-sm text-tertiary">
            <ActionButton onClick={handleMarkAllAsRead}>모두 읽음</ActionButton>
            <ActionButton onClick={handleDeleteAll}>모두 삭제</ActionButton>
          </div>
        </div>
        {children}
      </div>
    </MainContent>
  );
}
