/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/runtime.ts";

export default function Greet(props: PageProps) {
  return <div>Hello {props.params.name}</div>;
}
