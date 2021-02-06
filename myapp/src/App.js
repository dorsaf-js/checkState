import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          fullName: "dorsaf",
          bio: "blablabla",
          profession: "junior developper",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/6/65/Kruse_CNDLS_Profile.png",
        },
      ],
      isShow: false,
      sec: 0,
    };
  }

  showProfile = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        sec: this.state.sec + 1,
      });
    }, 1000);
  }

  displayTime=(timeSec)=>{
    let h=Math.floor(timeSec/3600)
    let m=Math.floor((timeSec-(h*3600))/60)
    let s=timeSec-(h*3600)-(m*60)
    return <span>{h.toString().padStart(2,'0')} : {m.toString().padStart(2,'0')} : {s.toString().padStart(2,'0')}</span>
  }

  render() {
    return (
      <div>
        <p>{this.displayTime(this.state.sec)}</p>
        <Button variant="primary" onClick={this.showProfile}>
          show Profile
        </Button>
        
        {this.state.isShow ? (
          this.state.person.map((el, index) => (
            <Card style={{ width: "18rem" }} key={index}>
              <Card.Img variant="top" src={el.imgSrc} />
              <Card.Body>
                <Card.Title>{el.fullName}</Card.Title>
                <Card.Text>{el.bio}</Card.Text>
                <Card.Text>{el.profession}</Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <h1>click on the button to show the profile</h1>
        )}
      </div>
    );
  }
}

export default App;
