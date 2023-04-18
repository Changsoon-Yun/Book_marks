import { useGetFolders } from '@/feature/bookmark/hooks/useGetFolders';
import styled from '@emotion/styled';
import { Folder } from '@/types/api/Folder';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Icon,
  Text,
} from '@chakra-ui/react';
import { AiFillFolder, AiFillFolderOpen } from 'react-icons/ai';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

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
  return (
    <AccordionItem border={'none'}>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton
              px={2}
              bg={clickedFolder === item ? 'rgba(40, 87, 234, 0.3)' : 'inherit'}
              _hover={{ bg: 'rgba(40,87,234,0.1)' }}
              onClick={() => {
                setClickedFolder(item);
              }}
              borderRadius={'10px'}>
              <Flex flex='1' textAlign='left' align={'center'}>
                <Icon as={isExpanded ? AiFillFolderOpen : AiFillFolder} />
                <Text pl={2}>{item.name}</Text>
              </Flex>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel px={0} py={0} pl={2} borderRadius={'10px'}>
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

export default function SideNav({ userName }: { userName: string | string[] }) {
  const { data: folders = [] } = useGetFolders(userName);
  const [clickedFolder, setClickedFolder] = useState<Folder>(folders[0]);
  useEffect(() => {
    setClickedFolder(folders[0]);
  }, [folders]);
  return (
    <Box as={'nav'} w={'250px'} mr={'20px'}>
      {folders.map((folder) => (
        <Accordion defaultIndex={[0]} allowMultiple key={folder.id}>
          <Item item={folder} clickedFolder={clickedFolder} setClickedFolder={setClickedFolder} />
        </Accordion>
      ))}
    </Box>
  );
}
