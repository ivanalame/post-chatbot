import React, { Component } from "react";

export default class WikiComponent extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { select, selectReact } = steps;
    this.state = {
      select,
      selectReact,
      statusProgramacion: false,
      detail: "",
    };
  }

  componentDidMount() {
    if (this.state.select.value === "n") {
      this.setState({
        statusProgramacion: true,
      });
    }

    if (this.state.select.value === "y") {
      this.state.detail = this.state.selectReact.value;
    }
  }
  render() {
    return (
        <div>
        {this.state.statusProgramacion ? (
          <div>
            <a href="https://es.wikipedia.org/wiki/Programaci%C3%B3n" target="_blank">
              ¿Qué es la programación?
            </a>
          </div>
        ) : (
          <div>
            <a href={"https://es.wikipedia.org/wiki/React#" + this.state.detail} target="_blank">
              {this.state.detail} React
            </a>
          </div>
        )}
      </div>
      
    );
  }
}
