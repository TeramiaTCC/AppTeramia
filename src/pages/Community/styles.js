import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDFA',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : 25,
  },
  buttonNewPost:{
    width: 50,
    height: 50,
    backgroundColor: '#F16520',
    position: 'absolute',
    bottom: 80,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default styles;

import styled from 'styled-components';

//export const Post = styled.View``;

//export const Header = styled.View``;

//export const Avatar = styled.image``;

//export const PostImage = styled.image``;

//export const Name = styled.text``;

//export const Description = styled.text``;