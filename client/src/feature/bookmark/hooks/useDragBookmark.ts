import React, { useState } from 'react';
import { Folder } from '@/types/api/Folder';
import { useRecoilState } from 'recoil';
import { Bookmark } from '@/types/api/Bookmark';
import { droppedTargetAtom, grabbedTargetAtom } from '@/lib/recoil/atom';
import useUpdateBookmark from '@/feature/bookmark/hooks/useUpdateBookmark';

/**
 *
 * @param dropItemTarget 드래그 한 아이템을 드랍하는곳의 타입
 *
 */
export default function UseDragBookmark(dropItemTarget: 'bookmark' | 'folder') {
  const [grab, setGrab] = useState(false);
  const [{ grabbedTarget }, setGrabbedTarget] = useRecoilState(grabbedTargetAtom);
  const [{ droppedTarget }, setDroppedTarget] = useRecoilState(droppedTargetAtom);
  const updateBookmark = useUpdateBookmark();
  const dragFunction = async (e: React.DragEvent<HTMLDivElement>, type: string, item: Bookmark) => {
    // e.preventDefault();
    // e.stopPropagation();
    const target = e.currentTarget as HTMLElement;
    if (type === 'dragStart') {
      target.classList.add('grabbing');
      setGrabbedTarget({
        grabbedTarget: item,
      });
    }

    if (type === 'dragEnd') {
      target.classList.remove('grabbing');
    }

    if (type === 'over') {
      e.preventDefault();
      e.stopPropagation();
      if (target.classList.contains('grabbing')) {
        return;
      }

      target.classList.add('grabbing');
      setDroppedTarget({
        droppedTarget: item,
      });

      setGrab(true);
    }

    if (type === 'leave') {
      target.classList.remove('grabbing');
      setGrab(false);
    }

    if (type === 'drop' && droppedTarget && grabbedTarget) {
      console.log('drop???');

      if (droppedTarget.id === grabbedTarget.id) {
        return;
      }

      if (dropItemTarget === 'bookmark' && 'orderId' in droppedTarget) {
        updateBookmark({ bookmark: { ...grabbedTarget, orderId: droppedTarget.orderId }, type: 'order' });
      } else {
        updateBookmark({ bookmark: { ...grabbedTarget, folderId: droppedTarget.id } });
      }
      setGrab(false);
    }
  };

  return { grab, setGrab, grabbedTarget, droppedTarget, setDroppedTarget, dragFunction };
}
