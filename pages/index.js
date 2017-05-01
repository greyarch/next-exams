import React from 'react'
import { Article } from 'grommet'

import Page from '../layouts/main'
// import getExams from '../lib/exams'
import Question from '../components/question'

import Exam from '../data/exam'
import { bindActionCreators } from 'redux'
import { initStore, nextQuestion } from '../store/store'
import withRedux from 'next-redux-wrapper'

class Index extends React.Component {
  static async getInitialProps() {
    const exam = Exam
    return { exam }
  }

  render() {
    return (
      <Page>
        <Article
          scrollStep={true}
          controls={true}
          selected={this.props.currentQuestion}
        >
          {this.props.exam.map((q, idx) => (
            <Question
              key={q.id}
              question={q}
              onNextQuestion={this.props.nextQuestion(idx)}
            />
          ))}
        </Article>
      </Page>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    nextQuestion: qnr => bindActionCreators(() => nextQuestion(qnr), dispatch)
  }
}
const mapStateToProps = state => {
  return {
    currentQuestion: state.currentQuestion
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index)
