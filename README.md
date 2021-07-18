# folkestemmen

## Component diagram

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBCdXR0b25cbkFwcCAtLT4gTGF5b3V0XG5MYXlvdXQgLS0-IEhlYWRlclxuQXBwIC0tPiBXZWxjb21lXG5BcHAgLS0-IE1haW5cbkxheW91dCAtLT4gRm9vdGVyXG5IZWFkZXIgLS0-IExvZ29cbkhlYWRlciAtLT4gTG9nX2luXG5XZWxjb21lIC0tPiBXZWxjb21lX2ltYWdlXG5NYWluIC0tPiBRdWVzdGlvblxuTWFpbiAtLT4gSW5wdXRcbk1haW4gLS0-IFdhbGxcblF1ZXN0aW9uIC0tPiBRdWVzdGlvbl90YWdcblF1ZXN0aW9uIC0tPiBRdWVzdGlvbl9oZWFkZXJcbklucHV0IC0tPiBUZXh0X2lucHV0XG5JbnB1dCAtLT4gVGFnX2lucHV0XG5JbnB1dCAtLT4gU3VibWl0X2J1dHRvblxuV2FsbCAtLT4gU29ydFxuV2FsbCAtLT4gUmVzcG9uc2VcblJlc3BvbnNlIC0tPiBSZXNwb25zZV9oZWFkZXJcblJlc3BvbnNlIC0tPiBSZXNwb25kZXJfbmFtZVxuUmVzcG9uc2UgLS0-IFRhZ3NcbmNsYXNzIFdlbGNvbWVfaW1hZ2Uge1xuXHREZXNrdG9wIG9ubHlcbn0iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBCdXR0b25cbkFwcCAtLT4gTGF5b3V0XG5MYXlvdXQgLS0-IEhlYWRlclxuQXBwIC0tPiBXZWxjb21lXG5BcHAgLS0-IE1haW5cbkxheW91dCAtLT4gRm9vdGVyXG5IZWFkZXIgLS0-IExvZ29cbkhlYWRlciAtLT4gTG9nX2luXG5XZWxjb21lIC0tPiBXZWxjb21lX2ltYWdlXG5NYWluIC0tPiBRdWVzdGlvblxuTWFpbiAtLT4gSW5wdXRcbk1haW4gLS0-IFdhbGxcblF1ZXN0aW9uIC0tPiBRdWVzdGlvbl90YWdcblF1ZXN0aW9uIC0tPiBRdWVzdGlvbl9oZWFkZXJcbklucHV0IC0tPiBUZXh0X2lucHV0XG5JbnB1dCAtLT4gVGFnX2lucHV0XG5JbnB1dCAtLT4gU3VibWl0X2J1dHRvblxuV2FsbCAtLT4gU29ydFxuV2FsbCAtLT4gUmVzcG9uc2VcblJlc3BvbnNlIC0tPiBSZXNwb25zZV9oZWFkZXJcblJlc3BvbnNlIC0tPiBSZXNwb25kZXJfbmFtZVxuUmVzcG9uc2UgLS0-IFRhZ3NcbmNsYXNzIFdlbGNvbWVfaW1hZ2Uge1xuXHREZXNrdG9wIG9ubHlcbn0iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)

## Entity relationship diagram for mongoDB

[![](https://mermaid.ink/img/eyJjb2RlIjoiZXJEaWFncmFtXG5cdHVzZXIge1xuXHRcdHN0cmluZyB1c2VyTmFtZVxuXHRcdHN0cmluZyBwYXNzd29yZFxuXHRcdHN0cmluZyBlbWFpbFxuXHR9XG5cdGFkbWluIHtcblx0XHRzdHJpbmcgdXNlck5hbWVcblx0XHRzdHJpbmcgcGFzc3dvcmRcblx0XHRzdHJpbmcgZW1haWxcblx0fVxuXHRxdWVzdGlvbiB7XG5cdFx0c3RyaW5nIGhlYWRlclxuXHRcdGRhdGUgY3JlYXRlZEF0XG5cdFx0T2JqZWN0SUQgYWRtaW5cbiAgICAgICAgc3RyaW5nIGRlc2NyaXBvdGlvblxuXHRcdH1cblx0YW5zd2VyIHtcblx0XHRzdHJpbmcgaGVhZGVyXG5cdFx0ZGF0ZSBjcmVhdGVkQXRcblx0XHRPYmplY3RJRCB1c2VyXG4gICAgICAgIE9iamVjdElEIHRhZ1xuXHR9XG4gICAgdGFne1xuICAgICAgICBzdHJpbmcgdGFnXG4gICAgfVxuXHR1c2VyIHx8LS19fCBhbnN3ZXIgOiBoYXNcbiAgICBhZG1pbiB8fC0tfW8gcXVlc3Rpb24gOiBoYXNcbiAgICBhbnN3ZXIgfHwtLX1vIHRhZyA6IGhhcyIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/edit##eyJjb2RlIjoiZXJEaWFncmFtXG5cdHVzZXIge1xuXHRcdHN0cmluZyB1c2VyTmFtZVxuXHRcdHN0cmluZyBwYXNzd29yZFxuXHRcdHN0cmluZyBlbWFpbFxuXHR9XG5cdGFkbWluIHtcblx0XHRzdHJpbmcgdXNlck5hbWVcblx0XHRzdHJpbmcgcGFzc3dvcmRcblx0XHRzdHJpbmcgZW1haWxcblx0fVxuXHRxdWVzdGlvbiB7XG5cdFx0c3RyaW5nIGhlYWRlclxuXHRcdGRhdGUgY3JlYXRlZEF0XG5cdFx0T2JqZWN0SUQgYWRtaW5cbiAgICAgICAgc3RyaW5nIGRlc2NyaXBvdGlvblxuXHRcdH1cblx0YW5zd2VyIHtcblx0XHRzdHJpbmcgaGVhZGVyXG5cdFx0ZGF0ZSBjcmVhdGVkQXRcblx0XHRPYmplY3RJRCB1c2VyXG4gICAgICAgIE9iamVjdElEIHRhZ1xuXHR9XG4gICAgdGFne1xuICAgICAgICBzdHJpbmcgdGFnXG4gICAgfVxuXHR1c2VyIHx8LS19fCBhbnN3ZXIgOiBoYXNcbiAgICBhZG1pbiB8fC0tfW8gcXVlc3Rpb24gOiBoYXNcbiAgICBhbnN3ZXIgfHwtLX1vIHRhIDogaGFzIiwibWVybWFpZCI6IntcbiAgXCJ0aGVtZVwiOiBcImRlZmF1bHRcIlxufSIsInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)
