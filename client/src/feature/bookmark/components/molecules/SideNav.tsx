import { Folder } from '@/types/api/Folder';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Icon,
  Text,
} from '@chakra-ui/react';
import { AiFillFolder, AiFillFolderOpen } from 'react-icons/ai';
import React, { Dispatch, DragEventHandler, SetStateAction, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import { FiSettings } from 'react-icons/fi';
import { BsArrowDownShort, BsArrowLeftShort } from 'react-icons/bs';
import styled from '@emotion/styled';

function Item({
  item,
  clickedFolder,
  setClickedFolder,
}: {
  item: Folder;
  clickedFolder: Folder;
  setClickedFolder: Dispatch<SetStateAction<Folder>>;
}) {
  const hasChildren = item.children && item.children.length > 0;

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLElement;
    target.classList.add('overMe');
    console.log(target);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('leave!!!!!!!!!!!');
    const target = e.target as HTMLElement;
    target.classList.remove('overMe');
    console.log(e.target);
  };

  return (
    <AccordionItem border={'none'}>
      {({ isExpanded }) => (
        <>
          <h2>
            <Flex
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              px={2}
              h={9}
              bg={clickedFolder === item ? 'rgba(40, 87, 234, 0.3)' : 'inherit'}
              _hover={{ bg: clickedFolder === item ? 'rgba(40,87,234,0.3)' : 'rgba(40,87,234,0.1)' }}
              onClick={() => {
                setClickedFolder(item);
              }}
              cursor={'pointer'}
              borderRadius={'10px'}>
              <Flex flex='1' textAlign='left' align={'center'} transition={'0.5s'}>
                <Icon as={clickedFolder === item ? AiFillFolderOpen : AiFillFolder} />
                <Text pl={2}>{item.name}</Text>
              </Flex>
              {hasChildren && (
                <AccordionButton
                  w={9}
                  h={9}
                  p={0}
                  sx={{ justifyContent: 'center', alignItems: 'center' }}
                  borderRadius={'full'}
                  onClick={(e) => e.stopPropagation()}>
                  {isExpanded ? <BsArrowDownShort fontSize={'20px'} /> : <BsArrowLeftShort fontSize={'20px'} />}
                </AccordionButton>
              )}
            </Flex>
          </h2>
          <AccordionPanel px={0} py={0} pl={4} borderRadius={'10px'}>
            {hasChildren && (
              <>
                {item.children?.map((child) => (
                  <Item clickedFolder={clickedFolder} setClickedFolder={setClickedFolder} item={child} key={child.id} />
                ))}
              </>
            )}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}

export default function SideNav({
  userName,
  folders,
  clickedFolder,
  setClickedFolder,
  createFolderHandler,
}: {
  userName: string | string[];
  folders: Folder[];
  clickedFolder: Folder;
  setClickedFolder: React.Dispatch<React.SetStateAction<Folder>>;
  createFolderHandler: () => Promise<void>;
}) {
  const { t } = useTranslation('common');

  return (
    <Flex
      as={'nav'}
      minW={'180px'}
      maxH={'full'}
      h={'full'}
      pt={10}
      pb={2}
      pr={2}
      direction={'column'}
      justify={'space-between'}
      overflow={'auto'}>
      {folders.map((folder) => (
        <Accordion defaultIndex={[0]} allowMultiple key={folder.id}>
          <Item item={folder} clickedFolder={clickedFolder} setClickedFolder={setClickedFolder} />
        </Accordion>
      ))}
      <Button w={'full'} onClick={createFolderHandler} leftIcon={<FiSettings />}>
        {t('bookmark.sideNav.setting')}
      </Button>
    </Flex>
  );
}
