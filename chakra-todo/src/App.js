import './App.css';

import { Button, ChakraProvider, Container, Input } from '@chakra-ui/react';
import { Box, Heading, FormControl } from "@chakra-ui/react";
import { useState } from 'react';

function App() {
	const [todoText, setTodoText] = useState('');
	const [allTodos, setAllTodos] = useState([]);

	const onTodoAdd = (e) => {
		e.preventDefault();
		// setAllTodos({...allTodos, todoText});
		setTodoText('')
		allTodos.push(todoText);
	}

  return (
		<ChakraProvider>
			<Container>
				<Box boxShadow={'xs'}>
					<Heading textAlign={'center'}> Todo List </Heading>
				</Box>

				<Box mt={4}>
					<FormControl>
						<Input type={'text'} value={todoText} onChange={(e) => setTodoText(e.target.value)} placeholder='Enter a new todo...' />
						<Button mt={3} onClick={onTodoAdd}> Add </Button>
					</FormControl>
				</Box>
				
				{allTodos.map(todo => 
					<Box boxShadow={'xs'} mt={5}>
						{todo}
					</Box>
				)}
			</Container>
		</ChakraProvider>
  );
}

export default App;
