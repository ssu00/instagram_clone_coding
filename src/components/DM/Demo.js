import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, Send } from 'react-native-gifted-chat'
import {getCurrentUser} from "../../utils/firebase";
import {Alert} from "react-native";
import {MaterialIcons} from "@expo/vector-icons"
import { Text } from 'react-native';

const SendButton=props=>{
    return (
        <Send {...props}
        disabled={!props.text}
        containerStyle = {{
                width: 44,
                height: 44,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 4
        }}>
            < MaterialIcons
            name = "send"
            size = {24}
            color = {props.text ? "#f12323" : "#020201"}
            />
        </Send>
    )
}

export function Example({navigation,form}) {
  const [messages, setMessages] = useState([]); 
  const {uid,name}=getCurrentUser();
  const _handleMessageSend=async messageList=>{
      const newMessage=messageList[0];
      try{
          await createMessage({channelId:params.id,message:newMessage});
      }catch(e){
          Alert.alert('Send Message Error',e.message);
      }
  };

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
 
  return (
    <GiftedChat
      listViewProps={{style:{backgroundColor:"#7401ff"}}}
      placeholder={"Enter a message"}
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{_id: uid,name}}
      alwaysShowSend={true}
      textInputProps={{
          autoCapitalize:'none',
          autoCorrect:false,
          textContentType:'none',
          underlineColorAndroid:'transparent',
      }}
      multiline={false}
      renderUsernameOnMessage={true}
      scrollToBottom={true}
      renderSend={props=><SendButton {...props}/>}
    />
  )
}