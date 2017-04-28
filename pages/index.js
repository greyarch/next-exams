import React from 'react'
import {Box, Article, Section, Headline, Markdown} from 'grommet'

import Page from '../layouts/main'
import getExams from '../lib/exams'
import Question from '../components/question'

import Exam from '../data/exam'
console.log(Exam);

export default class extends React.Component {
  static async getInitialProps({ query }) {
    const exam = Exam
    return { exam }
  }

  render() {
    return <Page>
      <Article scrollStep={true} controls={true}>
        {this.props.exam.map(q =>
          <Question key={q.id} question={q} />
        )}
      </Article>
    </Page>
  }
}
