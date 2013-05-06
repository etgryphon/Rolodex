# ===========================================================================
# Project:   Rolodex
# Copyright: ©2011 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
config :all, :required => :sproutcore
config :rolodex do |c|
  c[:required] = [:sproutcore, :'sproutcore/standard_theme']
end