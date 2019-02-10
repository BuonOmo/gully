#!/usr/bin/env ruby
require 'fileutils'

raise "ORIGIN_DIR not specified" unless ORIGIN_DIR = ENV['ORIGIN_DIR']
raise "OUT_DIR not specified" unless OUT_DIR = ENV['OUT_DIR']
raise "EDITION not specified" unless EDITION = ENV['EDITION']

FileUtils.mkdir_p OUT_DIR

Dir.glob(File.join(ORIGIN_DIR, '*')).each_with_index do |file, index|
  ext = File.extname file
  new_name = "GULLY_#{EDITION}_#{index + 1}#{ext}"
  p new_name
  new_file = File.join(OUT_DIR, new_name)
  `convert -quality 85 '#{file}' '#{new_file}'`
end
