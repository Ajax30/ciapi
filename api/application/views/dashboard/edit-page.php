<div class="container fluid-fixed">
  <div class="content-wrapper">
    <main class="dashboard-content wide-content">
      <div class="row">
        <?php $this->load->view("dashboard/partials/sidebar");?>
        <div class="col-sm-7 col-md-9">
          <div class="card bg-light">
            <h6 class="card-header text-dark">Edit page</h6>
            <div class="card-body bg-white">
              <?php echo form_open_multipart(base_url('dashboard/pages/update')); ?>
              <input type="hidden" name="pid" id="pid" value="<?php echo $page->id; ?>">
              <div class="form-group <?php if(form_error('title')) echo 'has-error';?>">
                <input type="text" name="title" id="title" class="form-control" value="<?php echo $page->title; ?>" placeholder="Title">
                <?php if(form_error('title')) echo form_error('title'); ?> 
              </div>
              <div class="form-group <?php if(form_error('content')) echo 'has-error';?>">
                <textarea name="content" id="body" cols="30" rows="5" class="form-control" placeholder="Edit page content"><?php echo $page->content; ?></textarea>
                <?php if(form_error('content')) echo form_error('body'); ?> 
              </div>
              <div class="form-group">
                <input type="submit" value="Update" class="btn btn-block btn-md btn-success">
              </div>              
              <?php echo form_close(); ?>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>