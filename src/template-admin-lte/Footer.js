import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <div>
            <footer className="main-footer">
                <strong>Feito por: Defensoria Pública Geral do Estado do Ceará © 2023</strong>               
                <div className="float-right d-none d-sm-inline-block">
                  <strong>Version</strong> 0.0.1
                </div>
            </footer>
        </div>
    )
  }
}
