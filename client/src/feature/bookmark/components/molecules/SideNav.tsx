import { useGetFolders } from '@/feature/bookmark/hooks/useGetFolders';
import styled from '@emotion/styled';
import { Folder } from '@/types/api/Folder';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';

function Item({ item }: { item: Folder }) {
  const hasChildren = item.children && item.children.length > 0;
  return (
    <AccordionItem>
      <h2>
        <AccordionButton pr={0} px={0}>
          <Box as='span' flex='1' textAlign='left'>
            {item.name}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} px={0} pl={4}>
        {hasChildren && (
          <>
            {item.children?.map((child) => (
              <Item item={child} key={child.id} />
            ))}
          </>
        )}
      </AccordionPanel>
    </AccordionItem>
  );
}

export default function SideNav({ userName }: { userName: string | string[] }) {
  const { data: folders = [] } = useGetFolders(userName);
  console.log(folders);
  return (
    <Box as={'nav'} w={'200px'} mr={'20px'}>
      {folders.map((folder) => (
        <Accordion defaultIndex={[0]} allowMultiple key={folder.id}>
          {folder.children?.map((child) => (
            <Item key={child.id} item={child} />
          ))}
        </Accordion>
      ))}
    </Box>
  );
}
