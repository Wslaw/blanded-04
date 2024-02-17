import { Component, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { addTodo, getTodos, deleteTodo } from 'store/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';

export const App = () => {
  // const [todos, setTodos] = useState(() => {
  //   return JSON.parse(localStorage.getItem('todos')) || [];
  // });

  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addnewTodo = text => {
    const todo = {
      id: nanoid(),
      text,
    };

    // setTodos(( prevTodos ) => (
    //        [...prevTodos, todo]
    //     ));
    dispatch(addTodo(todo));
  };

  const handleSubmit = data => {
    addnewTodo(data);
  };

  const deleteNewTodo = id => {
    // setTodos(prevState => prevState.filter(todo => todo.id !== id));
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm onSubmit={handleSubmit} />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo
                    id={todo.id}
                    text={todo.text}
                    counter={index + 1}
                    onClick={deleteNewTodo}
                  />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
