import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
// import { ScrollView } from 'react-native/types_generated/index';

export default function App() {
  const [name, setName] = useState<string>('4444');
  const showAlert = (x: string) => {
    alert(x);
  }
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'tieu de 1' },
    { id: 2, title: 'tieu de 2' },
    { id: 3, title: 'tieu de 3' },
    { id: 4, title: 'tieu de 4' },
    { id: 5, title: 'tieu de 5' },
    { id: 6, title: 'tieu de 6' },
    { id: 7, title: 'tieu de 7' },
    { id: 8, title: 'tieu de 8' },
  ]);
  const Item = ({ title }) => {
    return (
      <View>
        <Text style={styles.todo}>{title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>xin chào  đay là thay đổi đầu tiên {name}</Text>
      <Button title='xin chòa' color="#f194ff"
        onPress={() => showAlert('Bạn đang nhấn Press')}
      />
      <Button title='nhấn vào ' color="#0b010dff"
        onPress={() => setTodoList([{ id: 4, title: 'đã thêm' }])}
      />
      {/* <StatusBar style="auto" /> */}
      {/* <Text>
        đây là mảng {JSON.stringify(todoList)}
      </Text> */}
      {/* <ScrollView style={{ borderColor: 'red', borderWidth: 1, marginTop: 10, padding: 10 }}>
        {todoList.map(todo => {
          return (
            <Text key={todo.id} style={styles.todo}>{todo.title}: nội dung {todo.title}</Text>
          )
        })}
      </ScrollView> */}
      <FlatList
        data={todoList}
        renderItem={({ item }) => <Item title={item.title} />}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  todo: {
    fontSize: 30,
    backgroundColor: 'pink',
    marginBottom: 10,
    paddingTop: 50
  }
  ,
  text: {
    color: 'blue',
    fontSize: 20,
  },
  button: {
    color: 'Grey'
  }
  ,
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
