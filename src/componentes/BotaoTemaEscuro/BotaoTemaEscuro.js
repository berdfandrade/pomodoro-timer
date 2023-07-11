


import React from 'react';
import { Button, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon} from '@chakra-ui/icons'


const TemaEscuroButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button colorScheme="gray"p={1} onClick={toggleColorMode}>
      {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
    </Button>
  );
};

export default TemaEscuroButton;
