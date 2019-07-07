/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function FormatDecimal(axu){
    
    var num = 0;
    var axu2 = 0;
    
    axu = axu.toString();
    axu2 = parseFloat(axu);
        
    axu = axu.toString();
    if(axu2 !== undefined || axu2 !== null){
       if(axu2 <= 999999 && axu2 > 99999) {
          var v1 = axu.substring(0, + 3);
          var v2 = axu.substring(3, + 6);
          var v3 = axu.substring(7, + 9);
          if(v3 < 10 && v3 > 0){
             v3 = v3 + '0'; 
          }else if(v3 == "" || v3 == 0){
                   v3 = '00'
                }
          if(v3 < 999 && v3 > 0){
             v3 = v3.substring(0, + 2); 
          }      
          num = 'R$' + ' ' + v1 + '.' + v2 + ',' + v3;
       }else if(axu2 <= 9999999 && axu2 > 999999){
                var v1 = axu.substring(0, + 1);
                var v2 = axu.substring(1, + 4);
                var v3 = axu.substring(4, + 7);
                var v4 = axu.substring(8, + 10);
                if(v4 < 10 && v4 > 0){
                  v4 = v4 + '0'; 
                }else if(v4 == "" || v4 == 0){
                         v4 = '00'
                      }
                if(v4 < 999 && v4 > 0){
                   v4 = v4.substring(0, + 2); 
                }      
                num = 'R$' + ' ' + v1 + '.' + v2 + '.' + v3 + ',' + v4;
             }else if(axu2 <= 99999999 && axu2 > 9999999){
                      var v1 = axu.substring(0, + 2);
                      var v2 = axu.substring(2, + 5);
                      var v3 = axu.substring(5, + 8);
                      var v4 = axu.substring(9, + 11);
                      if(v4 < 10 && v4 > 0){
                         v4 = v4 + '0'; 
                      }else if(v4 == "" || v4 == 0){
                               v4 = '00'
                            }
                      if(v4 < 999 && v4 > 0){
                         v4 = v4.substring(0, + 2); 
                      }      
                      num = 'R$' + ' ' + v1 + '.' + v2 + '.' + v3 + ',' + v4;
                   }else if(axu2 <= 99999 && axu2 > 9999){
                            var v1 = axu.substring(0, + 2);
                            var v2 = axu.substring(2, + 5);
                            var v3 = axu.substring(6, + 8);
                            if(v3 < 10 && v3 > 0){
                               v3 = v3 + '0'; 
                            }else if(v3 == "" || v3 == 0){
                                     v3 = '00'
                                  }
                            if(v3 < 999 && v3 > 0){
                               v3 = v3.substring(0, + 2); 
                            }      
                            num = 'R$' + ' ' + v1 + '.' + v2 + ',' + v3;
                         }else if(axu2 <= 9999 && axu2 > 999){
                                  var v1 = axu.substring(0, + 1);
                                  var v2 = axu.substring(1, + 4);
                                  var v3 = axu.substring(5, + 7);
                                  if(v3 < 10 && v3 > 0){
                                     v3 = v3 + '0'; 
                                  }else if(v3 == "" || v3 == 0){
                                           v3 = '00'
                                        }
                                  if(v3 < 999 && v3 > 0){
                                     v3 = v3.substring(0, + 2); 
                                  }      
                                  num = 'R$' + ' ' + v1 + '.' + v2 + ',' + v3;
                               }else if(axu2 <= 999 && axu2 > 99){
                                        var v1 = axu.substring(0, + 3);
                                        var v2 = axu.substring(4, + 6);
                                        if(v2 < 10 && v2 > 0){
                                           v2 = v2 + '0'; 
                                        }else if(v2 == "" || v2 == 0){
                                                v2 = '00'
                                              }
                                        if(v2 < 999 && v2 > 0){
                                           v2 = v2.substring(0, + 2); 
                                        }      
                                        num = 'R$' + ' ' + v1 + ',' + v2;
                                     }else if(axu2 <= 99 && axu2 > 9){
                                             var v1 = axu.substring(0, + 2);
                                             var v2 = axu.substring(3, + 5);
                                             if(v2 < 10 && v2 > 0){
                                                v2 = v2 + '0'; 
                                             }else if(v2 == "" || v2 == 0){
                                                      v2 = '00'
                                                   }
                                             if(v2 < 999 && v2 > 0){
                                                v2 = v2.substring(0, + 2); 
                                             }      
                                             num = 'R$' + ' ' + v1 + ',' + v2;
                                           }else if(axu2 <= 9 && axu2 > 0){
                                                    var v1 = axu.substring(0, + 1);
                                                    var v2 = axu.substring(2, + 4);
                                                    if(v2 < 10 && v2 > 0){
                                                       v2 = v2 + '0'; 
                                                    }else if(v2 == "" || v2 == 0){
                                                             v2 = '00'
                                                          }
                                                    if(v2 < 999 && v2 > 0){
                                                      v2 = v2.substring(0, + 2); 
                                                    }      
                                                    num = 'R$' + ' ' + v1 + ',' + v2;
                                                 }else if(axu2 == 0){
                                                          var v1 = axu.substring(0, + 1);
                                                          var v2 = axu.substring(2, + 4);
                                                          if(v2 < 10 && v2 > 0){
                                                             v2 = v2 + '0'; 
                                                          }else if(v2 == "" || v2 == 0){
                                                                   v2 = '00'
                                                                }
                                                          if(v2 < 999 && v2 > 0){
                                                             v2 = v2.substring(0, + 2); 
                                                          }      
                                                          num = 'R$' + ' ' + v1 + ',' + v2;
                                                        }
    }else{
         num = 'R$' + ' ' + '0,00';
     } 

    return num;
    
}//function FormatDecimal();

function FormatDecimalResult(axu){
    
    var num = 0;
    var axu2 = 0;
    
    axu = axu.toString();
    axu2 = parseFloat(axu);
    
    
    axu = axu.toString();
    if(axu2 !== undefined || axu2 !== null){
       if(axu2 <= 999999 && axu2 > 99999) {
          var v1 = axu.substring(0, + 3);
          var v2 = axu.substring(3, + 6);
          var v3 = axu.substring(7, + 9);
          if(v3 < 10 && v3 > 0){
             v3 = v3 + '0'; 
          }else if(v3 == "" || v3 == 0){
                   v3 = '00'
                }
          if(v3 < 999 && v3 > 0){
             v3 = v3.substring(0, + 2); 
          }      
          num = v1 + '.' + v2 + ',' + v3;
       }else if(axu2 <= 9999999 && axu2 > 999999){
                var v1 = axu.substring(0, + 1);
                var v2 = axu.substring(1, + 4);
                var v3 = axu.substring(4, + 7);
                var v4 = axu.substring(8, + 10);
                if(v4 < 10 && v4 > 0){
                  v4 = v4 + '0'; 
                }else if(v4 == "" || v4 == 0){
                         v4 = '00'
                      }
                if(v4 < 999 && v4 > 0){
                   v4 = v4.substring(0, + 2); 
                }      
                num = v1 + '.' + v2 + '.' + v3 + ',' + v4;
             }else if(axu2 <= 99999999 && axu2 > 9999999){
                      var v1 = axu.substring(0, + 2);
                      var v2 = axu.substring(2, + 5);
                      var v3 = axu.substring(5, + 8);
                      var v4 = axu.substring(9, + 11);
                      if(v4 < 10 && v4 > 0){
                         v4 = v4 + '0'; 
                      }else if(v4 == "" || v4 == 0){
                               v4 = '00'
                            }
                      if(v4 < 999 && v4 > 0){
                         v4 = v4.substring(0, + 2); 
                      }      
                      num = v1 + '.' + v2 + '.' + v3 + ',' + v4;
                   }else if(axu2 <= 99999 && axu2 > 9999){
                            var v1 = axu.substring(0, + 2);
                            var v2 = axu.substring(2, + 5);
                            var v3 = axu.substring(6, + 8);
                            if(v3 < 10 && v3 > 0){
                               v3 = v3 + '0'; 
                            }else if(v3 == "" || v3 == 0){
                                     v3 = '00'
                                  }
                            if(v3 < 999 && v3 > 0){
                               v3 = v3.substring(0, + 2); 
                            }      
                            num = v1 + '.' + v2 + ',' + v3;
                         }else if(axu2 <= 9999 && axu2 > 999){
                                  var v1 = axu.substring(0, + 1);
                                  var v2 = axu.substring(1, + 4);
                                  var v3 = axu.substring(5, + 7);
                                  if(v3 < 10 && v3 > 0){
                                     v3 = v3 + '0'; 
                                  }else if(v3 == "" || v3 == 0){
                                           v3 = '00'
                                        }
                                  if(v3 < 999 && v3 > 0){
                                     v3 = v3.substring(0, + 2); 
                                  }      
                                  num = v1 + '.' + v2 + ',' + v3;
                               }else if(axu2 <= 999 && axu2 > 99){
                                        var v1 = axu.substring(0, + 3);
                                        var v2 = axu.substring(4, + 6);
                                        if(v2 < 10 && v2 > 0){
                                           v2 = v2 + '0'; 
                                        }else if(v2 == "" || v2 == 0){
                                                v2 = '00'
                                              }
                                        if(v2 < 999 && v2 > 0){
                                           v2 = v2.substring(0, + 2); 
                                        }      
                                        num = v1 + ',' + v2;
                                     }else if(axu2 <= 99 && axu2 > 9){
                                             var v1 = axu.substring(0, + 2);
                                             var v2 = axu.substring(3, + 5);
                                             if(v2 < 10 && v2 > 0){
                                                v2 = v2 + '0'; 
                                             }else if(v2 == "" || v2 == 0){
                                                      v2 = '00'
                                                   }
                                             if(v2 < 999 && v2 > 0){
                                                v2 = v2.substring(0, + 2); 
                                             }      
                                             num = v1 + ',' + v2;
                                           }else if(axu2 <= 9 && axu2 > 0){
                                                    var v1 = axu.substring(0, + 1);
                                                    var v2 = axu.substring(2, + 4);
                                                    if(v2 < 10 && v2 > 0){
                                                       v2 = v2 + '0'; 
                                                    }else if(v2 == "" || v2 == 0){
                                                             v2 = '00'
                                                          }
                                                    if(v2 < 999 && v2 > 0){
                                                      v2 = v2.substring(0, + 2); 
                                                    }      
                                                    num = v1 + ',' + v2;
                                                 }else if(axu2 == 0){
                                                          var v1 = axu.substring(0, + 1);
                                                          var v2 = axu.substring(2, + 4);
                                                          if(v2 < 10 && v2 > 0){
                                                             v2 = v2 + '0'; 
                                                          }else if(v2 == "" || v2 == 0){
                                                                   v2 = '00'
                                                                }
                                                          if(v2 < 999 && v2 > 0){
                                                             v2 = v2.substring(0, + 2); 
                                                          }      
                                                          num = v1 + ',' + v2;
                                                        }
    }else{
         num = '0,00';
     } 

    return num;
    
}//function FormatDecimalResult();

/////////////////////////////******************/////////////////////////////////

function FormatArea(axu){
    
    var num = 0;
    var axu2 = 0;
    
    axu = axu.toString();
    axu2 = parseFloat(axu);
    
    if(axu2 !== undefined || axu2 !== null){
       if(axu2 <= 999999 && axu2 > 99999) {
          var v1 = axu.substring(0, + 3);
          var v2 = axu.substring(3, + 6);
          var v3 = axu.substring(7, + 9);
          if(v3 < 10 && v3 > 0){
             v3 = v3 + '0'; 
          }else if(v3 == "" || v3 == 0){
                   v3 = '00'
                }
          if(v3 < 999 && v3 > 0){
             v3 = v3.substring(0, + 2); 
          }      
          num = v1 + '.' + v2 + ',' + v3 + ' ' + 'm²';
       }else if(axu2 <= 9999999 && axu2 > 999999){
                var v1 = axu.substring(0, + 1);
                var v2 = axu.substring(1, + 4);
                var v3 = axu.substring(4, + 7);
                var v4 = axu.substring(8, + 10);
                if(v4 < 10 && v4 > 0){
                  v4 = v4 + '0'; 
                }else if(v4 == "" || v4 == 0){
                         v4 = '00'
                      }
                if(v4 < 999 && v4 > 0){
                   v4 = v4.substring(0, + 2); 
                }      
                num = v1 + '.' + v2 + '.' + v3 + ',' + v4 + ' ' + 'm²';
             }else if(axu2 <= 99999999 && axu2 > 9999999){
                      var v1 = axu.substring(0, + 2);
                      var v2 = axu.substring(2, + 5);
                      var v3 = axu.substring(5, + 8);
                      var v4 = axu.substring(9, + 11);
                      if(v4 < 10 && v4 > 0){
                         v4 = v4 + '0'; 
                      }else if(v4 == "" || v4 == 0){
                               v4 = '00'
                            }
                      if(v4 < 999 && v4 > 0){
                         v4 = v4.substring(0, + 2); 
                      }      
                      num = v1 + '.' + v2 + '.' + v3 + ',' + v4 + ' ' + 'm²';
                   }else if(axu2 <= 99999 && axu2 > 9999){
                            var v1 = axu.substring(0, + 2);
                            var v2 = axu.substring(2, + 5);
                            var v3 = axu.substring(6, + 8);
                            if(v3 < 10 && v3 > 0){
                               v3 = v3 + '0'; 
                            }else if(v3 == "" || v3 == 0){
                                     v3 = '00'
                                  }
                            if(v3 < 999 && v3 > 0){
                               v3 = v3.substring(0, + 2); 
                            }      
                            num = v1 + '.' + v2 + ',' + v3 + ' ' + 'm²';
                         }else if(axu2 <= 9999 && axu2 > 999){
                                  var v1 = axu.substring(0, + 1);
                                  var v2 = axu.substring(1, + 4);
                                  var v3 = axu.substring(5, + 7);
                                  if(v3 < 10 && v3 > 0){
                                     v3 = v3 + '0'; 
                                  }else if(v3 == "" || v3 == 0){
                                           v3 = '00'
                                        }
                                  if(v3 < 999 && v3 > 0){
                                     v3 = v3.substring(0, + 2); 
                                  }      
                                  num = v1 + '.' + v2 + ',' + v3 + ' ' + 'm²';
                               }else if(axu2 <= 999 && axu2 > 99){
                                        var v1 = axu.substring(0, + 3);
                                        var v2 = axu.substring(4, + 6);
                                        if(v2 < 10 && v2 > 0){
                                           v2 = v2 + '0'; 
                                        }else if(v2 == "" || v2 == 0){
                                                v2 = '00'
                                              }
                                        if(v2 < 999 && v2 > 0){
                                           v2 = v2.substring(0, + 2); 
                                        }      
                                        num = v1 + ',' + v2 + ' ' + 'm²';
                                     }else if(axu2 <= 99 && axu2 > 9){
                                             var v1 = axu.substring(0, + 2);
                                             var v2 = axu.substring(3, + 5);
                                             if(v2 < 10 && v2 > 0){
                                                v2 = v2 + '0'; 
                                             }else if(v2 == "" || v2 == 0){
                                                      v2 = '00'
                                                   }
                                             if(v2 < 999 && v2 > 0){
                                                v2 = v2.substring(0, + 2); 
                                             }      
                                             num = v1 + ',' + v2 + ' ' + 'm²';
                                           }else if(axu2 <= 9 && axu2 > 0){
                                                    var v1 = axu.substring(0, + 1);
                                                    var v2 = axu.substring(2, + 4);
                                                    if(v2 < 10 && v2 > 0){
                                                       v2 = v2 + '0'; 
                                                    }else if(v2 == "" || v2 == 0){
                                                             v2 = '00'
                                                          }
                                                    if(v2 < 999 && v2 > 0){
                                                      v2 = v2.substring(0, + 2); 
                                                    }      
                                                    num = v1 + ',' + v2 + ' ' + 'm²';
                                                 }else if(axu2 == 0){
                                                          var v1 = axu.substring(0, + 1);
                                                          var v2 = axu.substring(2, + 4);
                                                          if(v2 < 10 && v2 > 0){
                                                             v2 = v2 + '0'; 
                                                          }else if(v2 == "" || v2 == 0){
                                                                   v2 = '00'
                                                                }
                                                          if(v2 < 999 && v2 > 0){
                                                             v2 = v2.substring(0, + 2); 
                                                          }      
                                                          num = v1 + ',' + v2 + ' ' + 'm²';
                                                        }
    }else{
         num = '0,00' + ' ' + 'm²';
     }    
    
    return num;
    
}//fim da function FormatArea();

///////////////////////////////*******************//////////////////////////////

function FormatAreaResult(axu){
    
    var num = 0;
    var axu2 = 0;
    
    axu = axu.toString();
    axu2 = parseFloat(axu);
    
    if(axu2 !== undefined || axu2 !== null){
       if(axu2 <= 999999 && axu2 > 99999) {
          var v1 = axu.substring(0, + 3);
          var v2 = axu.substring(3, + 6);
          var v3 = axu.substring(7, + 9);
          if(v3 < 10 && v3 > 0){
             v3 = v3 + '0'; 
          }else if(v3 == "" || v3 == 0){
                   v3 = '00'
                }
          if(v3 < 999 && v3 > 0){
             v3 = v3.substring(0, + 2); 
          }      
          num = v1 + '.' + v2 + ',' + v3;
       }else if(axu2 <= 9999999 && axu2 > 999999){
                var v1 = axu.substring(0, + 1);
                var v2 = axu.substring(1, + 4);
                var v3 = axu.substring(4, + 7);
                var v4 = axu.substring(8, + 10);
                if(v4 < 10 && v4 > 0){
                  v4 = v4 + '0'; 
                }else if(v4 == "" || v4 == 0){
                         v4 = '00'
                      }
                if(v4 < 999 && v4 > 0){
                   v4 = v4.substring(0, + 2); 
                }      
                num = v1 + '.' + v2 + '.' + v3 + ',' + v4;
             }else if(axu2 <= 99999999 && axu2 > 9999999){
                      var v1 = axu.substring(0, + 2);
                      var v2 = axu.substring(2, + 5);
                      var v3 = axu.substring(5, + 8);
                      var v4 = axu.substring(9, + 11);
                      if(v4 < 10 && v4 > 0){
                         v4 = v4 + '0'; 
                      }else if(v4 == "" || v4 == 0){
                               v4 = '00'
                            }
                      if(v4 < 999 && v4 > 0){
                         v4 = v4.substring(0, + 2); 
                      }      
                      num = v1 + '.' + v2 + '.' + v3 + ',' + v4;
                   }else if(axu2 <= 99999 && axu2 > 9999){
                            var v1 = axu.substring(0, + 2);
                            var v2 = axu.substring(2, + 5);
                            var v3 = axu.substring(6, + 8);
                            if(v3 < 10 && v3 > 0){
                               v3 = v3 + '0'; 
                            }else if(v3 == "" || v3 == 0){
                                     v3 = '00'
                                  }
                            if(v3 < 999 && v3 > 0){
                               v3 = v3.substring(0, + 2); 
                            }      
                            num = v1 + '.' + v2 + ',' + v3;
                         }else if(axu2 <= 9999 && axu2 > 999){
                                  var v1 = axu.substring(0, + 1);
                                  var v2 = axu.substring(1, + 4);
                                  var v3 = axu.substring(5, + 7);
                                  if(v3 < 10 && v3 > 0){
                                     v3 = v3 + '0'; 
                                  }else if(v3 == "" || v3 == 0){
                                           v3 = '00'
                                        }
                                  if(v3 < 999 && v3 > 0){
                                     v3 = v3.substring(0, + 2); 
                                  }      
                                  num = v1 + '.' + v2 + ',' + v3;
                               }else if(axu2 <= 999 && axu2 > 99){
                                        var v1 = axu.substring(0, + 3);
                                        var v2 = axu.substring(4, + 6);
                                        if(v2 < 10 && v2 > 0){
                                           v2 = v2 + '0'; 
                                        }else if(v2 == "" || v2 == 0){
                                                v2 = '00'
                                              }
                                        if(v2 < 999 && v2 > 0){
                                           v2 = v2.substring(0, + 2); 
                                        }      
                                        num = v1 + ',' + v2;
                                     }else if(axu2 <= 99 && axu2 > 9){
                                             var v1 = axu.substring(0, + 2);
                                             var v2 = axu.substring(3, + 5);
                                             if(v2 < 10 && v2 > 0){
                                                v2 = v2 + '0'; 
                                             }else if(v2 == "" || v2 == 0){
                                                      v2 = '00'
                                                   }
                                             if(v2 < 999 && v2 > 0){
                                                v2 = v2.substring(0, + 2); 
                                             }      
                                             num = v1 + ',' + v2;
                                           }else if(axu2 <= 9 && axu2 > 0){
                                                    var v1 = axu.substring(0, + 1);
                                                    var v2 = axu.substring(2, + 4);
                                                    if(v2 < 10 && v2 > 0){
                                                       v2 = v2 + '0'; 
                                                    }else if(v2 == "" || v2 == 0){
                                                             v2 = '00'
                                                          }
                                                    if(v2 < 999 && v2 > 0){
                                                      v2 = v2.substring(0, + 2); 
                                                    }      
                                                    num = v1 + ',' + v2;
                                                 }else if(axu2 == 0){
                                                          var v1 = axu.substring(0, + 1);
                                                          var v2 = axu.substring(2, + 4);
                                                          if(v2 < 10 && v2 > 0){
                                                             v2 = v2 + '0'; 
                                                          }else if(v2 == "" || v2 == 0){
                                                                   v2 = '00'
                                                                }
                                                          if(v2 < 999 && v2 > 0){
                                                             v2 = v2.substring(0, + 2); 
                                                          }      
                                                          num = v1 + ',' + v2;
                                                        }
    }else{
         num = '0,00';
     }    
    
    return num;
    
}//fi da function FormatAreaResult()

function FormatMetro(axu){
    
    var num = 0;
    var axu2 = 0;
    
    axu = axu.toString();
    axu2 = parseFloat(axu);
    
    if(axu2 !== undefined || axu2 !== null){
       if(axu2 <= 999999 && axu2 > 99999) {
          var v1 = axu.substring(0, + 3);
          var v2 = axu.substring(3, + 6);
          var v3 = axu.substring(7, + 9);
          if(v3 < 10 && v3 > 0){
             v3 = v3 + '0'; 
          }else if(v3 == "" || v3 == 0){
                   v3 = '00'
                }
          if(v3 < 999 && v3 > 0){
             v3 = v3.substring(0, + 2); 
          }      
          num = v1 + '.' + v2 + ',' + v3 + ' ' + 'm';
       }else if(axu2 <= 9999999 && axu2 > 999999){
                var v1 = axu.substring(0, + 1);
                var v2 = axu.substring(1, + 4);
                var v3 = axu.substring(4, + 7);
                var v4 = axu.substring(8, + 10);
                if(v4 < 10 && v4 > 0){
                  v4 = v4 + '0'; 
                }else if(v4 == "" || v4 == 0){
                         v4 = '00'
                      }
                if(v4 < 999 && v4 > 0){
                   v4 = v4.substring(0, + 2); 
                }      
                num = v1 + '.' + v2 + '.' + v3 + ',' + v4 + ' ' + 'm';
             }else if(axu2 <= 99999999 && axu2 > 9999999){
                      var v1 = axu.substring(0, + 2);
                      var v2 = axu.substring(2, + 5);
                      var v3 = axu.substring(5, + 8);
                      var v4 = axu.substring(9, + 11);
                      if(v4 < 10 && v4 > 0){
                         v4 = v4 + '0'; 
                      }else if(v4 == "" || v4 == 0){
                               v4 = '00'
                            }
                      if(v4 < 999 && v4 > 0){
                         v4 = v4.substring(0, + 2); 
                      }      
                      num = v1 + '.' + v2 + '.' + v3 + ',' + v4 + ' ' + 'm';
                   }else if(axu2 <= 99999 && axu2 > 9999){
                            var v1 = axu.substring(0, + 2);
                            var v2 = axu.substring(2, + 5);
                            var v3 = axu.substring(6, + 8);
                            if(v3 < 10 && v3 > 0){
                               v3 = v3 + '0'; 
                            }else if(v3 == "" || v3 == 0){
                                     v3 = '00'
                                  }
                            if(v3 < 999 && v3 > 0){
                               v3 = v3.substring(0, + 2); 
                            }      
                            num = v1 + '.' + v2 + ',' + v3 + ' ' + 'm';
                         }else if(axu2 <= 9999 && axu2 > 999){
                                  var v1 = axu.substring(0, + 1);
                                  var v2 = axu.substring(1, + 4);
                                  var v3 = axu.substring(5, + 7);
                                  if(v3 < 10 && v3 > 0){
                                     v3 = v3 + '0'; 
                                  }else if(v3 == "" || v3 == 0){
                                           v3 = '00'
                                        }
                                  if(v3 < 999 && v3 > 0){
                                     v3 = v3.substring(0, + 2); 
                                  }      
                                  num = v1 + '.' + v2 + ',' + v3 + ' ' + 'm';
                               }else if(axu2 <= 999 && axu2 > 99){
                                        var v1 = axu.substring(0, + 3);
                                        var v2 = axu.substring(4, + 6);
                                        if(v2 < 10 && v2 > 0){
                                           v2 = v2 + '0'; 
                                        }else if(v2 == "" || v2 == 0){
                                                v2 = '00'
                                              }
                                        if(v2 < 999 && v2 > 0){
                                           v2 = v2.substring(0, + 2); 
                                        }      
                                        num = v1 + ',' + v2 + ' ' + 'm';
                                     }else if(axu2 <= 99 && axu2 > 9){
                                             var v1 = axu.substring(0, + 2);
                                             var v2 = axu.substring(3, + 5);
                                             if(v2 < 10 && v2 > 0){
                                                v2 = v2 + '0'; 
                                             }else if(v2 == "" || v2 == 0){
                                                      v2 = '00'
                                                   }
                                             if(v2 < 999 && v2 > 0){
                                                v2 = v2.substring(0, + 2); 
                                             }      
                                             num = v1 + ',' + v2 + ' ' + 'm';
                                           }else if(axu2 <= 9 && axu2 > 0){
                                                    var v1 = axu.substring(0, + 1);
                                                    var v2 = axu.substring(2, + 4);
                                                    if(v2 < 10 && v2 > 0){
                                                       v2 = v2 + '0'; 
                                                    }else if(v2 == "" || v2 == 0){
                                                             v2 = '00'
                                                          }
                                                    if(v2 < 999 && v2 > 0){
                                                      v2 = v2.substring(0, + 2); 
                                                    }      
                                                    num = v1 + ',' + v2 + ' ' + 'm';
                                                 }else if(axu2 == 0){
                                                          var v1 = axu.substring(0, + 1);
                                                          var v2 = axu.substring(2, + 4);
                                                          if(v2 < 10 && v2 > 0){
                                                             v2 = v2 + '0'; 
                                                          }else if(v2 == "" || v2 == 0){
                                                                   v2 = '00'
                                                                }
                                                          if(v2 < 999 && v2 > 0){
                                                             v2 = v2.substring(0, + 2); 
                                                          }      
                                                          num = v1 + ',' + v2 + ' ' + 'm';
                                                        }
    }else{
         num = '0,00' + ' ' + 'm';
     }    
    
    return num;
    
}//fim da function FormatMetro();

///////////////////////////////*******************//////////////////////////////

function FormatMedicao(org){
    
        var num = 0;
        var axu = 0;
        
    axu = org.toString();
    
    if(axu !== undefined || axu !== null){
       axu = axu.replace("," , "");
       if(axu <= 999999 && axu > 99999.99) {
          var v1 = axu.substring(0, + 3);
          var v2 = axu.substring(3, + 6);
          var v3 = axu.substring(7, + 9);
          if(v3 < 10 && v3 > 0){
             v3 = v3 + '0'; 
          }else if(v3 == "" || v3 == 0){
                   v3 = '00'
                }
          if(v3 < 999 && v3 > 0){
             v3 = v3.substring(0, + 2); 
          }      
          num = v1 + '.' + v2 + ',' + v3;
       }else
           
       if(axu <= 99999 && axu > 9999.99){
          var v1 = axu.substring(0, + 2);
          var v2 = axu.substring(2, + 5);
          var v3 = axu.substring(6, + 8);
          if(v3 < 10 && v3 > 0){
             v3 = v3 + '0'; 
          }else if(v3 == "" || v3 == 0){
                   v3 = '00'
                }
          if(v3 < 999 && v3 > 0){
             v3 = v3.substring(0, + 2); 
          }      
          num = v1 + '.' + v2 + ',' + v3;
       }else  
           
       if(axu <= 9,999.9 && axu > 999.99){
          var v1 = axu.substring(0, + 1);
          var v2 = axu.substring(1, + 4);
          var v3 = axu.substring(5, + 7);
          if(v3 < 10 && v3 > 0){
             v3 = v3 + '0'; 
          }else if(v3 == "" || v3 == 0){
                   v3 = '00'
                }
          if(v3 < 999 && v3 > 0){
             v3 = v3.substring(0, + 2); 
          }      
          num = v1 + '.' + v2 + ',' + v3;
       }else  
        
       if(axu <= 999.99 && axu > 99.99){
          var v1 = axu.substring(0, + 3);
          var v2 = axu.substring(4, + 6);
          if(v2 < 10 && v2 > 0){
             v2 = v2 + '0'; 
          }else if(v2 == "" || v2 == 0){
                  v2 = '00'
                }
          if(v2 < 999 && v2 > 0){
             v2 = v2.substring(0, + 2); 
          }      
          num = v1 + ',' + v2;
       }else 
           
       if(axu <= 999 && axu > 99){
          var v1 = axu.substring(0, + 3);
          var v2 = axu.substring(4, + 6);
          if(v2 < 10 && v2 > 0){
             v2 = v2 + '0'; 
          }else if(v2 == "" || v2 == 0){
                  v2 = '00'
                }
          if(v2 < 999 && v2 > 0){
             v2 = v2.substring(0, + 2); 
          }      
          num = v1 + ',' + v2;
       }else 
       
       if(axu <= 99 && axu > 9){
          var v1 = axu.substring(0, + 2);
          var v2 = axu.substring(3, + 5);
          if(v2 < 10 && v2 > 0){
             v2 = v2 + '0'; 
          }else if(v2 == "" || v2 == 0){
                   v2 = '00'
                }
          if(v2 < 999 && v2 > 0){
             v2 = v2.substring(0, + 2); 
          }      
          num = v1 + ',' + v2;
        }else
            
        if(axu <= 9 && axu > 0){
           var v1 = axu.substring(0, + 1);
           var v2 = axu.substring(2, + 4);
           if(v2 < 10 && v2 > 0){
              v2 = v2 + '0'; 
           }else if(v2 == "" || v2 == 0){
                    v2 = '00'
                 }
           if(v2 < 999 && v2 > 0){
              v2 = v2.substring(0, + 2); 
           }      
           num = v1 + ',' + v2;
        }else 
                   
        if(axu == 0){
           var v1 = axu.substring(0, + 1);
           var v2 = axu.substring(2, + 4);
           if(v2 < 10 && v2 > 0){
              v2 = v2 + '0'; 
           }else if(v2 == "" || v2 == 0){
                    v2 = '00'
                 }
           if(v2 < 999 && v2 > 0){
              v2 = v2.substring(0, + 2); 
           }      
           num = v1 + ',' + v2;
        }
    
    }else{
         num = axu;
     }    
    
    return num;
}//fim da function FormatMedicao()


////attributes.measure = attributes.measure.toString().replace("." , ",");
        