# React

## Table des matières

1. Motivation
2. Packages
3. Webpack 

## Motivation
Uniformisation des pratiques React utilisées dans les projets futur.

## Packages
### State management
#### Redux
Immutabilité de l'état, fonction pures, paradigme fonctionel
- redux : redux core
- redux-action : redux action creator
- redux-thunk : redux async action creator
- react-redux : redux connection to react

#### Mobx
Mutation de l'état, utilisation des observables, paradigme orienté objet
- mobx : mobx core
- mox-react : mobx connection to react
- babel-plugin-transform-decorators-legacy: es7 decorators

### State management & Graphql
#### Apollo
- apollo-boost: apollo core

#### Relay (GraphQL)
Alternative a redux et apollo (graphql).

- graphql : graphql core
- react-relay : relay connection to react
- babel-plugin-relay : graphql runtime artifact conversion

### Forms
### Formik
- formik : formik core
- yup : object validation

### Final form 
- final-form : final form core
- react-final-form : react connection to final form

#### Informed
- informed: informed core

### UI
#### Material Ui
Implémentation de la spec material pour react
- @material-ui/core : material ui core
- @material-ui/styles : material ui styling system
- @material-ui/system : material ui box system
- @material-ui/icons : material icons

#### React bootstrap
Implémentation de Bootstrap pour react
- bootstrap : bootstrap core
- react-bootstrap : bootstrap connection to react

#### React desktop
Implémentation des UI OSX et Windows pour le web
- react-desktop : react desktop core

#### Semantic UI
Utilisé par Aamazon, Netflix et Micrcosoft
- semantic-ui-react : semantic ui core

#### Ant Design
Système de design et composants
antd : ant design core

### Icons

#### React Icons
Permet d'utiliser les icônes de différentes sources (fontawesome, material, ionicons, ...)
- react-icons : react icons core

### Charts
#### React Vis
- react-vis : react vis core

#### ReCharts
- recharts : recharts core

#### Vx
D3 + React = Vx
@vx/mock-data : data mock
@vx/group : group 
@vx/shape : shape type
@vx/scale : scale type

#### Victory
victory : victory core

### Dates

#### React moment
- moment : moment core
- react-moment : moment connection to react

### Maps

#### React Google Map
- react-google-maps : react google map core

#### Google Map React
- google-map-react : google map react core

#### React Leaflet
- react-leaflet : react leaftlet core

#### Pigeons Map
Alternative beaucoup plus légère (8kb gzip) aux autres map
- pigeon-maps: pigeon map core

## Webpack
