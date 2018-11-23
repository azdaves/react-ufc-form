import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search"

import Table from "./components/Table"


const list = [
  {
    id: 232925,
    nickname: "The Eagle",
    wins: 27,
    statid: 1919,
    losses: 0,
    last_name: "Nurmagomedov",
    weight_class: "Lightweight",
    title_holder: true,
    draws: 0,
    first_name: "Khabib",
    fighter_status: "Active",
    rank: "C",
    pound_for_pound_rank: null,
    thumbnail:
      "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FKhabib-Nurmagomedov%252FKhabib-Nurmagomedov_232925_medium_thumbnail.jpg?mw300-mh300-tc1",
    belt_thumbnail:
      "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FKhabib_Nurmagomedov%252FNURMAGOMEDOV_KHABIB_BELT2.png?mw300-mh300-tc1",
    left_full_body_image:
      "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252F1%252F229%252FDoubleheadsPNGs%252FNURMAGOMEDOV_KHABIB_L.png?mh530",
    right_full_body_image:
      "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FKhabib_Nurmagomedov%252FNURMAGOMEDOV_KHABIB_R223.png?mh530",
    profile_image:
      "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252F1%252F229%252FHeadshotPNGs%252FNURMAGOMEDOV_KHABIB.png?mw300-mh300-tc1",
    link: "http://www.ufc.com/fighter/Khabib-Nurmagomedov"
  },
  {
    id: 241944,
    nickname: "The Chosen One",
    wins: 19,
    statid: 1386,
    losses: 3,
    last_name: "Woodley",
    weight_class: "Welterweight",
    title_holder: true,
    draws: 1,
    first_name: "Tyron",
    fighter_status: "Active",
    rank: "C",
    pound_for_pound_rank: null,
    thumbnail:
      "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FTyron-Woodley%252FTyron-Woodley_241944_medium_thumbnail.jpg?mw300-mh300-tc1",
    belt_thumbnail:
      "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FTyrone_Woodley%252FWOODLEY_TYRON_L-PRINT.png?mw300-mh300-tc1",
    left_full_body_image:
      "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FTyrone_Woodley%252FWOODLEY_TYRON_L_BELT_S.png?mh530",
    right_full_body_image:
      "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FTyrone_Woodley%252FWOODLEY_TYRON_L_BELT_S.png?mh530",
    profile_image:
      "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F1%252F228%252FHeadshotPNGs%252FWOODLEY_TYRON_BELT.png?mw300-mh300-tc1",
    link: "http://www.ufc.com/fighter/Tyron-Woodley"
  },
  {
    id: 290162,
    nickname: "The Reaper",
    wins: 21,
    statid: 2037,
    losses: 4,
    last_name: "Whittaker",
    weight_class: "Middleweight",
    title_holder: true,
    draws: 0,
    first_name: "Robert",
    fighter_status: "Active",
    rank: "C",
    pound_for_pound_rank: null,
    thumbnail:
      "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252Frobert-whittaker%252Frobert-whittaker_290162_medium_thumbnail.jpg?mw300-mh300-tc1",
    belt_thumbnail:
      "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FRobert_Whittaker%252FWHITTAKER_ROBERT_BELT-MOCK2.png?mw300-mh300-tc1",
    left_full_body_image:
      "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FRobert_Whittaker%252FWHITTAKER_ROBERT_L.png?mh530",
    right_full_body_image:
      "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FRobert_Whittaker%252FWHITTAKER_ROBERT_R.png?mh530",
    profile_image:
      "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FRobert_Whittaker%252FWHITTAKER_ROBERT.png?mw300-mh300-tc1",
    link: "http://www.ufc.com/fighter/robert-whittaker"
  }
];



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: "",
      value: ""
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.id !== id);
    this.setState({ list: updatedList });
  }

  render() {
    const { searchTerm, list } = this.state;

    return (
      <div className="page">
      <div className="interactions">
      <Search value={searchTerm} onChange={this.onSearchChange} >Search</Search>
      </div>
      <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
        </div>
    )
  }
     
};







export default App;
