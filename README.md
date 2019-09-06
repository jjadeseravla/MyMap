# How to use the PDB Tracker Frontend

This is a prototype for the react frontend we might use for the PDB Tracker App.

It expects the sinatra backend to be running on http://localhost:9292. It also requires the Sinatra backend to send an appropriate CORS header, like so:

```ruby
  get '/:id' do
    headers 'Access-Control-Allow-Origin' => 'http://localhost:3000'
    employee = instantiate_employee(params[:id])
    serialize(employee)
  end
```