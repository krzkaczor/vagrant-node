# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "hashicorp/precise64"
  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.network "forwarded_port", guest: 5858, host: 5858
  config.vm.provision "shell", path: "provisioning.sh"

  #do not sync everything
  config.vm.synced_folder ".", "/vagrant", disabled: true
  config.vm.synced_folder "project", "/webapp"
end