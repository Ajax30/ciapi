<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Static_model extends CI_Model {

	public function get_static_data() {
		$data['site_title'] = "My Blog";
		$data['tagline'] = "A simple blog application made with Codeigniter 3";
		$data['company_name'] = "My Company";
		$data['company_email'] = "company@domain.com";
		$data['facebook'] = "https://www.facebook.com/isoftbet/";
		$data['instagram'] = "https://www.instagram.com/isoftbet/";
		$data['twitter'] = "https://twitter.com/iSoftBet";
		return $data;
	}

}