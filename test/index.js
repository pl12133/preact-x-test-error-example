import { h } from 'preact';
import 'preact-jsx-chai';

function Actual() {
	return <span />;
}

function Expected() {
	return <span />;
}

describe('failing test', () => {
	it('should pass when using function Components', () => {
		expect(
			<Actual />
		).to.eql(
			<Expected />
		);
	});
});

describe('passing test', () => {
	it('does pass when using HTMLElements', () => {
		expect(
			<span />
		).to.eql(
			<span />
		);
	});
});
