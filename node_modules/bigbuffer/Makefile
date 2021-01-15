all:

	echo "you need coffee script to build (should already shiped with requirable version without needs to build)and mocha to run test"
	echo "build coffee..."
	coffee -c lib/bigBuffer.coffee
	coffee -c test/test.coffee
	echo "Make test to run test"
test:
	cd test; mocha test.coffee --compilers .coffee:coffee-script -R spec -b

.PHONY: test
