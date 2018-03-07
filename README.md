# React Native - Open Tok Example

A simple React Native app using openTok to perform live audio-video streaming. This example includes both Publisher and Subscriber component.

### Open Tok

OpenTok is video platform tool from TokBox community to easily integrate high-quality video,audio streaming with your web or mobile apps.

OpenTok uses WebRTC technology for audio,video communications. OpenTok supports web,iOS,android and windows apps.

<div style="display:flex;" >
	<img style="margin-left:10px;" src="opentok-rn.png" width="100%" >
</div>


### To run this example,
 - Clone this repo git clone
 - `git clone git@github.com:prabakarviji/OpenTok_RN.git`
 - `cd openTok_RN`
 - run `npm install` or `yarn install`
 - Link open-tok library by `react-native link react-native-opentok`

	#### For iOS
    -   `cd ios` then install open-tok pod by `pod install`
    -   Open `TokBot.xcworkspace` in  XCode and run it.
    
### Usage

<div style="display:flex;" >
	<img style="margin-left:10px;" src="Image.png" width="100%" >
</div>


#### Publisher Component

       
```
<Publisher
    sessionId={sessionId}
    mute={this.state.isAudioMute}
    onPublishStart={() => { console.log('Streaming Started')}}
    onPublishStop={() => { console.log('Streaming Stopped')}}
    onPublishError={() => { console.log('Streaming Error')}}
    style={{backgroundColor: 'black',height:height, width: width,  }}
    ref={ref => {
      this.ref = ref;
    }}
/>
```
#### Subscriber Component

```
<Subscriber
    sessionId={sessionId}
    onSubscribeStart={() => { console.log('Watching started')}}
    onSubscribeStop={() => { console.log('Watching started')}
    onSubscribeError={() => { console.log('Watching started')}
    style={{backgroundColor: 'black',height:height, width: width,  }}
    ref={ref => {
      this.ref = ref;
    }}
/>
```
Thanks to [CallStack community](https://github.com/callstack/react-native-opentok) for this wonderful React Native Open-Tok wrapper
