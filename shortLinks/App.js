import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import Clipboard from '@react-native-community/clipboard';

const App = () => {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [urlFinal, setUrlFinal] = useState('');

  const short = async () => {
    Keyboard.dismiss();
    const api_key = '81df574c5b0c7b27110bb4481ec373861b3aa';

    if (url.includes('https://') || url.includes('http://')) {
      await fetch(
        `https://cutt.ly/api/api.php?key=${api_key}&short=${url}&name=${name}`,
      ).then(async response => {
        const data = await response.json();
        if (data.url.status === 3) {
          alert('Esse nome já está em uso');
          return;
        }
        if (data.url.status === 2) {
          alert('url é inválida');
          return;
        }
        setUrlFinal(data.url.shortLink);
      });
    } else {
      alert('Url inválida');
    }
  };

  const copyUrl = () => {
    Clipboard.setString(urlFinal);
    alert('Url copiada com sucesso');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>
          url
          <Text style={{color: 'blue'}}>Sujeito</Text>
        </Text>
        <TextInput
          style={styles.urlInput}
          onChangeText={texto => setUrl(texto)}
          value={url}
          placeholder="Digite a url..."
        />
        <TextInput
          style={styles.urlInput}
          onChangeText={texto => setName(texto)}
          value={name}
          placeholder="Digite um nome..."
        />

        <TouchableOpacity onPress={() => short()} style={styles.shortBtn}>
          <Text style={{color: '#FFF'}}>Encurtar</Text>
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={urlFinal ? copyUrl : null}>
          <Text style={styles.finalUrl}>{urlFinal}</Text>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#21243d',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 20,
  },
  urlInput: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FAFAFA',
    fontSize: 20,
    marginBottom: 20,
  },
  shortBtn: {
    backgroundColor: '#ff7c7c',
    borderRadius: 20,
    height: 40,
    width: '80%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finalUrl: {
    height: 40,
    width: '80%',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
});
