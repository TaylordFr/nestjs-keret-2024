import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { quotes } from './quotes (1)';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }

@Get('/quotes')
@Render('quotes')
getQuotes(){
  return {quotes: quotes};
}

@Get('/randomQuote')
@Render('randomQuote')
getrandomQuote(){
  const min = 1;
  const max = quotes.quotes.length;
  const num = Math.floor(Math.random()* max)

  const randomQuote = quotes.quotes[num]
  
  return {
    quote: randomQuote.quote,
    author: randomQuote.author
  }
}

@Get('/topAuthors')
@Render('topAuthors')
gettopAuthors(){
  
}
}
