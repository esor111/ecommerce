import React from 'react'
import "./adminuserdetail.css"

const adminuserDetail = () => {
  return (

<div class="container-fluid mx-auto">
    <div class="view-account">
        <section class="module">
            <div class="module-inner">
                <div class="side-bar">
                    <div class="user-info">
                        <img class="img-profile img-circle img-responsive center-block" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                        <ul class="meta list list-unstyled">
                            <li class="name">Rebecca Sanders
                                <label class="label label-info">UX Designer</label>
                            </li>
                            <li class="email"><a href="#">Rebecca.S@website.com</a></li>
                            <li class="activity">Last logged in: Today at 2:18pm</li>
                        </ul>
                    </div>
                    <nav class="side-menu">
                        <ul class="nav">
                            <li class="active"><a href="#"><span class="fa fa-user"></span> Profile</a></li>
                            <li><a href="#"><span class="fa fa-cog"></span> Settings</a></li>
                            <li><a href="#"><span class="fa fa-credit-card"></span> Billing</a></li>
                            <li><a href="#"><span class="fa fa-envelope"></span> Messages</a></li>
                            
                            <li><a href="user-drive.html"><span class="fa fa-th"></span> Drive</a></li>
                            <li><a href="#"><span class="fa fa-clock-o"></span> Reminders</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="content-panel">
                    <h2 class="title">Profile<span class="pro-label label label-warning">PRO</span></h2>
                    <form class="form-horizontal">
                        <fieldset class="fieldset">
                            <h3 class="fieldset-title">Personal Info</h3>
                            <div class="form-group avatar">
                                <figure class="figure col-md-2 col-sm-3 col-xs-12">
                                    <img class="img-rounded img-responsive" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                                </figure>
                                <div class="form-inline col-md-6 col-sm-9 col-xs-12">
                                    <input type="file" class="file-uploader pull-left"/>
                                    <button type="submit" class="btn btn-sm btn-default-alt pull-left">Update Image</button>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-2 col-sm-3 col-xs-12 control-label">User Name</label>
                                <div class="col-md-6 col-sm-9 col-xs-12">
                                    <input type="text" class="form-control" value="Rebecca"/>
                                </div>
                            </div>
        
                            <div class="form-group">
                                <label class="col-md-2 col-sm-3 col-xs-12 control-label">First Name</label>
                                <div class="col-md-6 col-sm-9 col-xs-12">
                                    <input type="text" class="form-control" value="Rebecca"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-2 col-sm-3 col-xs-12 control-label">Last Name</label>
                                <div class="col-md-6 col-sm-9 col-xs-12">
                                    <input type="text" class="form-control" value="Sanders"/>
                                </div>
                            </div>
                        </fieldset>

                        <hr/>
                        <div class="form-group">
                            <div class="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                                <input class="btn btn-primary" type="submit" value="Update Profile"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
    </div>

  )
}

export default adminuserDetail