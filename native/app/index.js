import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// 1
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'

// 2 Create a networkInterface with createNetworkInterface
// const networkInterface = createNetworkInterface({
//   uri: 'https://api.graph.cool/simple/v1/cj6avpqx1037i01704u86qvvn'
// })

// 3 Create a client which accepts your networkInterface
const client = new ApolloClient();

// 4 Wrap App component in a ApolloProvider HOC passing the client as a prop.
export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <Text>Let's get lunch🍔!</Text>
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
