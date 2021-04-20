# React Native Text Component

## Use Text Component : 
<p>Import Text from 'react-native' and then use it </>

```js
<Text>This is Normal Text Component</Text>
```

## Nested Text Component :
<p>When we use <b>Text component into another Text component</b> then the <b>children component inherit parent component style</b> </p>

```js
<Text 
    style={{color:'tomato'}}>Text Component can be <Text style={{fontSize:20, fontWeight:'bold'}}>Nested</Text>
</Text>
```
# Props 

## ellipsizeMode :
<p>When <b>numberOfLines</b> and <b>width</b> is set, this prop defines how text will be truncated. numberOfLines must be set in conjunction with this prop.</p>
<p>This can be one of the following values:</p>
<ul>
<li>head - The line is displayed so that the end fits in the container and the missing text at the beginning of the line is indicated by an ellipsis glyph. e.g., "...wxyz"</li>
<li>middle - The line is displayed so that the beginning and end fit in the container and the missing text in the middle is indicated by an ellipsis glyph. "ab...yz</li>
<li>tail - The line is displayed so that the beginning fits in the container and the missing text at the end of the line is indicated by an ellipsis glyph. e.g., "abcd..."</li>
<li>clip - Lines are not drawn past the edge of the text container.</li>
</ul>
 
 ```js
<Text 
    ellipsizeMode={'tail'}
    numberOfLines={1}
    style={{width:'50%'}}
    >This is ellipsizeMode text learn more about ellipsizeMode</Text>
 ```
## onPress :
<p>This function is called on press.</p>

```js
<Text
    onPress={() => alert('onPress')}>Text Component onPress Listener</Text>
```
## selectable :
<p>Lets the user select text, to use the native copy and paste functionality.</p>

```js
<Text
    selectable={true}>You can select this text</Text>
```
## Usage
```
 $ git clone https://github.com/SuryaKarmakar/React-Native-Text.git
 $ cd React-Native-Text
 $ npm install 
 $ npm run [web, android, ios]
```
## Run with Expo 
```
 $ expo start --[web, android, ios]
```

