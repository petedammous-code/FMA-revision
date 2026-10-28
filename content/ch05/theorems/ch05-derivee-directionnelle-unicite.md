---
id: ch05-derivee-directionnelle-unicite
type: proposition
chapter: 5
title: $df_a(h)$ comme dérivée directionnelle ; unicité de la différentielle
ref: "non numéroté (section V.3.1, après la Définition V.3.1)"
page: 98
importance: 2
depends: [ch05-differentielle-def, ch05-petit-o-def]
tags: [derivee-directionnelle, unicite, differentielle, calcul-pratique]
---
## Intuition

> 💡 Pour connaître $df_a(h)$, on se promène sur la droite $t\mapsto a+th$ qui passe par $a$ dans la direction $h$, et on dérive $f$ le long de cette droite en $t=0$ : c'est la **dérivée directionnelle** de $f$ en $a$ dans la direction $h$.

Si $f$ est différentiable en $a$ ([[ch05-differentielle-def]]), $f(a+th)\approx f(a)+t\,df_a(h)$, et le taux d'accroissement $\frac{f(a+th)-f(a)}{t}$ tend vers $df_a(h)$. Conséquence immédiate : $df_a$ est **déterminée** par $f$ (elle est unique). C'est aussi la **méthode de calcul** standard : on calcule la limite pour trouver la candidate, puis on vérifie le $o(h)$.

## Énoncé

**Proposition (poly, section V.3.1, p. 98).** Soient $E,F$ des espaces vectoriels normés, $U$ un ouvert de $E$, $f:U\to F$ et $a\in U$. Fixons $h\in E$. Pour $\eps>0$ assez petit, $a+th\in U$ pour tout $t\in\,]-\eps;\eps[$ car $U$ est ouvert, et si $df_a$ existe, on a
$$
df_a(h)=\lim_{t\to0}\frac{f(a+th)-f(a)}{t}
$$
(limite dans $F$, avec $t\in\R\setminus\{0\}$). Ceci montre au passage l'**unicité** de $df_a$ : si deux applications linéaires continues $L_1,L_2$ vérifient (V.3.1), alors $L_1=L_2$.

## Hypothèses

### H1 — $f$ différentiable en $a$

**Rôle.** C'est le $o(h)$ de (V.3.1), appliqué au déplacement $th$, qui fait tendre le taux d'accroissement vers $df_a(h)$.

**Si on la retire.** La limite peut exister pour tout $h$ sans que $f$ soit différentiable.
* *Limite non linéaire en $h$ :* $f(x,y)=\dfrac{x^2y}{x^4+y^2}$, $f(0,0)=0$. Pour $h=(h_1,h_2)$ et $t\ne0$ : $\dfrac{f(th)}t=\dfrac{h_1^2h_2}{t^2h_1^4+h_2^2}$, qui tend vers $\dfrac{h_1^2}{h_2}$ si $h_2\ne0$, et vaut $0$ si $h_2=0$. Cette fonction de $h$ n'est pas linéaire : elle vaut $0$ en $(1,0)$ et en $(0,1)$, mais $1$ en $(1,1)=(1,0)+(0,1)$. En outre $f(t,t^2)=\frac12$ pour $t\ne0$ : $f$ n'est même pas continue en $0$.
* *Limite linéaire, mais pas de différentiabilité :* $g(x,y)=1$ si $y=x^2$ et $x\ne0$, $g(x,y)=0$ sinon. Toute droite passant par $0$ ne rencontre la parabole $\{y=x^2,\ x\ne0\}$ qu'en au plus un point, distinct de $0$ (la droite $y=mx$ la coupe en $(m,m^2)$ si $m\ne0$ ; les droites $y=0$ et $x=0$ ne la coupent pas). Donc $g(th)=0$ pour $|t|$ petit, et toutes les dérivées directionnelles en $0$ sont nulles : la limite est l'application linéaire $0$. Pourtant $g$ n'est pas continue en $0$ ($g(t,t^2)=1$), donc pas différentiable ([[ch05-differentiable-implique-continue]]).

### H2 — $U$ ouvert

**Rôle.** Il garantit $a+th\in U$ pour $|t|$ petit, **pour toute direction $h$**. Sans cela, la limite n'a de sens que dans certaines directions et l'unicité tombe.

**Si on la retire.** Soit $A=\R\times\{0\}\subset\R^2$ (non ouvert) et $f:A\to\R$, $f\equiv0$. Pour tout $c\in\R$, l'application linéaire $L_c(h_1,h_2)=c\,h_2$ vérifie $f(a+h)-f(a)-L_c(h)=0$ pour tous $a,a+h\in A$ (car alors $h_2=0$). Il y a une infinité de « différentielles » : c'est pourquoi la Définition V.3.1 impose $U$ ouvert.

## Idée de la preuve

On applique (V.3.1) au déplacement $th$ et on divise par $|t|$ : l'écart entre le taux d'accroissement et $df_a(h)$ est $\le\eps\|h\|$. L'unicité suit car une limite est unique.

## Preuve

*Existence de $\eps$.* $U$ étant ouvert, il existe $r>0$ avec $B_E(a,r)\subset U$. Si $h=0$, tout convient. Sinon, pour $|t|<\eps:=r/\|h\|_E$, on a $\|th\|_E<r$, donc $a+th\in U$.

*La limite.* Si $h=0$, le taux d'accroissement est nul et $df_a(0)=0$ : rien à montrer. Supposons $h\ne0$ et soit $\eta>0$. Par (V.3.1) ([[ch05-differentielle-def]], [[ch05-petit-o-def]]), il existe $\delta>0$ tel que $\|f(a+k)-f(a)-df_a(k)\|_F\le\eta\|k\|_E$ pour $\|k\|_E<\delta$, $a+k\in U$. Pour $0<|t|<\min(\eps,\delta/\|h\|_E)$, appliquons ceci à $k=th$ ; par linéarité, $df_a(th)=t\,df_a(h)$, donc
$$
\Big\|\frac{f(a+th)-f(a)}{t}-df_a(h)\Big\|_F=\frac{\|f(a+th)-f(a)-df_a(th)\|_F}{|t|}\le\frac{\eta\,|t|\,\|h\|_E}{|t|}=\eta\|h\|_E .
$$
Comme $\eta$ est arbitraire, $\frac{f(a+th)-f(a)}{t}\to df_a(h)$ quand $t\to0$.

*Unicité.* Si $L_1$ et $L_2$ vérifient toutes deux (V.3.1), ce qui précède appliqué à chacune donne, pour tout $h\in E$, $L_1(h)=\lim_{t\to0}\frac{f(a+th)-f(a)}t=L_2(h)$, par unicité de la limite dans l'espace séparé $F$. Donc $L_1=L_2$. $\square$

*Variante (unicité directe) :* $L=L_1-L_2$ vérifie $\|L(k)\|_F\le\|f(a+k)-f(a)-L_2(k)\|_F+\|f(a+k)-f(a)-L_1(k)\|_F=o(k)$. Pour $h$ fixé, $\eta>0$ et $k=th$ avec $|t|$ petit : $|t|\,\|L(h)\|_F\le\eta\,|t|\,\|h\|_E$, donc $\|L(h)\|_F\le\eta\|h\|_E$ pour tout $\eta>0$, d'où $L(h)=0$.

## Preuve à trous

Soit $h\ne0$ et $\eta>0$. Par (V.3.1), il existe $\delta>0$ tel que $\|f(a+k)-f(a)-df_a(k)\|_F\le\eta\|k\|_E$ si $\|k\|_E<\delta$. On choisit <trou indice="quel déplacement k utiliser ?">$k=th$ avec $0<|t|<\delta/\|h\|_E$ (et $|t|$ assez petit pour que $a+th\in U$)</trou>. Par <trou>linéarité, $df_a(th)=t\,df_a(h)$</trou>, donc
$$
\Big\|\frac{f(a+th)-f(a)}{t}-df_a(h)\Big\|_F\le\eta\|h\|_E,
$$
ce qui prouve la convergence. L'unicité vient de ce que <trou indice="deux différentielles candidates...">deux applications vérifiant (V.3.1) prennent en chaque $h$ la même valeur, la limite du taux d'accroissement, qui est unique</trou>. $\square$

## Exemples

* **Le carré d'une matrice.** $f:\Mat_n(\R)\to\Mat_n(\R)$, $f(A)=A^2$. Pour $t\ne0$ : $\frac{(A+tH)^2-A^2}{t}=AH+HA+tH^2\to AH+HA$. La candidate est donc $L(H)=AH+HA$ (linéaire, continue en dimension finie). Vérification : $f(A+H)-f(A)-L(H)=H^2$ et, pour une norme d'algèbre, $\|H^2\|\le\|H\|^2=o(H)$. Donc $df_A(H)=AH+HA$ (et non $2AH$ : les matrices ne commutent pas).
* **Le déterminant en l'identité.** $\det$ est polynomiale en les coefficients, donc différentiable. En notant $\lambda_1,\dots,\lambda_n$ les valeurs propres complexes de $H$ (avec multiplicité), $\det(I+tH)=\prod_i(1+t\lambda_i)=1+t\sum_i\lambda_i+O(t^2)$, d'où $d(\det)_I(H)=\lim_{t\to0}\frac{\det(I+tH)-1}t=\mathrm{tr}\,H$.
* **Test de non-différentiabilité.** La norme euclidienne $N(x)=\|x\|_2$ sur $\R^2$, en $0$ : $\frac{N(th)}t=\frac{|t|}t\|h\|_2$ n'a pas de limite quand $t\to0$ si $h\ne0$ (elle vaut $\pm\|h\|_2$ selon le signe de $t$). Donc $N$ n'est pas différentiable en $0$.

## Pièges

* > ⚠️ La réciproque est **fausse** : l'existence de toutes les dérivées directionnelles, même linéaires en $h$, n'entraîne ni la différentiabilité ni la continuité (exemples de H1).
* La limite est **bilatère** ($t\to0$ par valeurs positives et négatives) : avec seulement $t\to0^+$, la norme $N$ aurait des « dérivées » $\|h\|_2$ dans toutes les directions.
* La formule donne la **candidate** ; pour conclure à la différentiabilité, il faut encore vérifier (V.3.1), ou invoquer un théorème (par exemple dérivées partielles continues, [[ch05-c1-ssi-partielles-continues]]).
