<div>
<img src="https://user-images.githubusercontent.com/79618538/208278696-3da631b3-a7fc-4178-bd29-31743571ccfe.png" width="700" />
</div>


## What The Technologies
<ul>
  <li>
    <a href="https://nextjs.org" target="_blank">Next JS</a>
  </li>
  <li>
    <a href="https://tailwindcss.com" target="_blank">Tailwind</a>
  </li>
  <li>
    <a href="https://firebase.google.com" target="_blank">Firebase</a>
  </li>
</ul>


## How To Use
`1.` First, you need clone this repository 
```
git clone https://github.com/kungs66/anonymous-messages-website.git
```
after clone the repository, run command 
```
npm install
```

`2.` Edit the ``/firebase.js`` file:
```
...

const firebaseConfig = {
  ...
};

...

```
you need make firebase application to get the firebase config, go to https://firebase.google.com and following the step


`3.` Create realtime database

Set the database location, I used ``United States (us-central1)``
<br>
<img src="https://user-images.githubusercontent.com/79618538/208272066-d0738738-2680-4ad1-b049-0fa65b91cbcc.png" width="500" />

<img src="https://user-images.githubusercontent.com/79618538/208272230-8561c19a-f2b3-4900-8de5-da54637bd415.png" width="500" />


`4.` Edit rules of realtime database, change the rules read and write to `true`
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```


`5.` Import the ``/Basics-database.json`` file to realtime database <br>
  q: why import this file to firebase realtime database? <br>
  a: because when import the json file to firebase realtime database, data on the database will fill of basics data, if not import json file to database, the website will error while fetch the data from database.


`6.` Don't worry, you can edit the Name display on the website and edit the Dice data <br>
go to the admin page `https://your-url.com/the-admin-page-for-answer-the-question`


`7.` Edit url the admin page
edit the name of folder:
```
./anonymous-messages-website/
│
├── pages/
│   ├── the-admin-page-for-answer-the-question/ <-- Edit this folder name
|   |   ├── index.jsx
|   |   ├── Name.jsx
|   |   └── Random.jsx
│   ├── _app.js
│   └── index.jsx
```
after you edit the folder name, you have to edit the variable in 3 files, open ``../pages/the-admin-page-for-answer-the-question/index.jsx`` , ``../pages/the-admin-page-for-answer-the-question/Name.jsx`` and ``../pages/the-admin-page-for-answer-the-question/Random.jsx``
```
...

const Dashboard = ({ onClick }) => {
  ...

  const url = "the-admin-page-for-answer-the-question"; <-- Edit this variable same with name of folder

  ...

}
```
**Important**: *after you edit them, don't share the url or folder name, because is a admin page*

```
Support me with buy me a coffee because there are still many updates in the future
Thanks You🤗
```
[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/https://www.buymeacoffee.com/kakoeng221X) [![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/http://ko-fi.com/kungs) 
