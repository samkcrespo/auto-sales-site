class LogHeaders
    def initialize(app)
      @app = app
    end
  
    def call(env)
        puts "Request headers: #{env.select { |k,v| k.start_with? 'HTTP_' }}"
        @app.call(env)
      end
  end
  