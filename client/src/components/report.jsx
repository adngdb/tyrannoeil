import React from 'react';

import Loader from './loader.jsx';
import ReportContent from './report-content.jsx';


export default class Report extends React.Component {
    render() {
        const report = this.props.report;
        const title = report.title || report.name || report.id;

        let content;
        if (report.isRunning) {
            content = <Loader />;
        }
        else {
            content = <ReportContent content={report.content} />;
        }

        return (
            <div>
                <h2>{ title }</h2>
                { content }
            </div>
        );
    }
}
