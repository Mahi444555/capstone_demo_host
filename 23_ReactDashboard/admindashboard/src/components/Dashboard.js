import React from 'react'
import BasicCard from './BasicCard'

function Dashboard(props) {
    return (

        <div id="content-wrapper" class="d-flex flex-column">
            {/*<!-- Main Content -->*/}
            <div id="content">

                <div class="container-fluid">

                    {/* <!-- Page Heading -->*/}
                    <div class="d-sm-flex align-items-center justify-content-between mb-4 mt-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="javascript(void)" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                            class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                    <div className='row'>
                    <BasicCard data={{value:props.data.earningMonthly,icon:'bi bi-calendar',cardBorder:'primary'}}/>
                    <BasicCard data={{value:props.data.earningAnnnual,icon:'bi bi-calendar',cardBorder:'success'}}/>
                    <BasicCard data={{value:props.data.taskCompletion,icon:'bi bi-check-circle',cardBorder:'warning'}}/>
                    <BasicCard data={{value:props.data.pendingrequest,icon:'fa- bi-check-square',cardBorder:'warning'}}/>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dashboard