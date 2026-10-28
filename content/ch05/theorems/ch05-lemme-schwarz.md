---
id: ch05-lemme-schwarz
type: theorem
chapter: 5
title: "Lemme de Schwarz : symétrie de la différentielle seconde"
ref: Théorème V.5.3
page: 107
importance: 3
depends: [ch05-differentielle-def, ch05-accroissements-finis, ch05-isometrie-bilineaire-curryfication, ch05-composition-differentielles, ch05-accroissements-finis-borne, ch05-differentielle-seconde-def]
tags: [schwarz, differentielle-seconde, symetrie, derivees-croisees, hessienne]
---
## Intuition

> 💡 Faire un pas $tu$ puis un pas $sv$, ou un pas $sv$ puis un pas $tu$, mène au **même point** $a+tu+sv$. Le « second accroissement »
> $g_{u,v}(t,s)=f(a+tu+sv)-f(a+sv)-f(a+tu)+f(a)$
> (somme alternée de $f$ aux quatre coins du parallélogramme $a$, $a+tu$, $a+sv$, $a+tu+sv$) est donc **symétrique** dans l'échange $(u,t)\leftrightarrow(v,s)$. Or il vaut, au second ordre, $ts\,d^2f_a(u,v)$. Donc $d^2f_a(u,v)=d^2f_a(v,u)$.

En coordonnées sur $\R^n$, c'est le fait bien connu que les dérivées croisées commutent : $\frac{\partial}{\partial x_i}\frac{\partial f}{\partial x_j}=\frac{\partial}{\partial x_j}\frac{\partial f}{\partial x_i}$ ; la hessienne est une matrice symétrique.

Rappels : $d^2f_a=d(df)_a\in\mathcal L(E;\mathcal L(E;F))$ est vue comme application bilinéaire $d^2f_a(u,v)=\big(d(df)_a(u)\big)(v)$ ([[ch05-differentielle-seconde-def]]) ; elle est **symétrique** si $d^2f_a(u,v)=d^2f_a(v,u)$ pour tous $u,v$.

## Énoncé

**Théorème (poly, Théorème V.5.3, p. 107 — lemme de Schwarz).** Soit $f:U\to F$ une application de classe $C^1$ d'un ouvert $U$ d'un espace vectoriel normé $E$ à valeurs dans un espace vectoriel normé $F$, telle que $df:U\to\mathcal L(E;F)$ soit différentiable en un point $a\in U$. Alors la différentielle seconde $d(df)_a=d^2f_a$ est une application bilinéaire **symétrique** de $E\times E$ dans $F$ :
$$
d^2f_a(u,v)=d^2f_a(v,u)\qquad(u,v\in E).
$$

## Hypothèses

### H1 — $f$ de classe $C^1$ sur l'ouvert $U$

**Rôle.** Elle assure que $df$ est définie au voisinage de $a$ (condition pour parler de sa différentiabilité en $a$) et que les fonctions d'une variable $s\mapsto f(a+tu+sv)$ sont dérivables, de dérivée $df_{a+tu+sv}(v)$, ce qui permet d'appliquer les accroissements finis.

**Si on la retire.** Hypothèse en partie de confort : la preuve n'utilise que la **différentiabilité** de $f$ au voisinage de $a$ (et celle de $df$ en $a$) ; la continuité de $df$ sur $U$ ne sert pas. La conclusion reste donc vraie si $f$ est seulement différentiable sur $U$ avec $df$ différentiable en $a$. On ne peut pas en revanche se passer de la différentiabilité de $f$ près de $a$ : sans elle, $d(df)_a$ n'est pas défini.

### H2 — $df$ différentiable au point $a$

**Rôle.** C'est l'hypothèse centrale : elle fournit, pour $\|x\|$ petit, l'approximation $df_{a+x}\approx df_a+d^2f_a(x,\cdot)$ à $\eps\|x\|$ près, utilisée trois fois dans la preuve.

**Si on la retire.** Le résultat est faux, même si $f$ est $C^1$ et si les deux dérivées croisées existent en $a$. Exemple classique : sur $\R^2$,
$$
f(x,y)=\frac{xy(x^2-y^2)}{x^2+y^2}\ \ \text{si }(x,y)\neq(0,0),\qquad f(0,0)=0 .
$$
Hors de l'origine, $\frac{\partial f}{\partial x}(x,y)=\frac{y(x^4+4x^2y^2-y^4)}{(x^2+y^2)^2}$ ; comme $f(y,x)=-f(x,y)$, $\frac{\partial f}{\partial y}(x,y)=-\frac{\partial f}{\partial x}(y,x)=\frac{x(x^4-4x^2y^2-y^4)}{(x^2+y^2)^2}$. En $0$, $f(x,0)=f(0,y)=0$ donne $\frac{\partial f}{\partial x}(0,0)=\frac{\partial f}{\partial y}(0,0)=0$, et $\big|\frac{\partial f}{\partial x}\big|,\big|\frac{\partial f}{\partial y}\big|\le6\sqrt{x^2+y^2}$ : les dérivées partielles sont continues sur $\R^2$, donc $f$ est $C^1$ ([[ch05-c1-ssi-partielles-continues]]). Mais
$$
\frac{\partial f}{\partial x}(0,y)=-y,\qquad\frac{\partial f}{\partial y}(x,0)=x,
$$
donc $\frac{\partial}{\partial y}\Big(\frac{\partial f}{\partial x}\Big)(0,0)=-1$ et $\frac{\partial}{\partial x}\Big(\frac{\partial f}{\partial y}\Big)(0,0)=1$. Si $df$ était différentiable en $0$, la formule $d^2f_0(u,v)=\lim_{t\to0}\frac{df_{tu}(v)-df_0(v)}{t}$ ([[ch05-differentielle-seconde-def]]) donnerait $d^2f_0(e_2,e_1)=\lim_t\frac1t\frac{\partial f}{\partial x}(0,t)=-1$ et $d^2f_0(e_1,e_2)=\lim_t\frac1t\frac{\partial f}{\partial y}(t,0)=1$, ce qui contredirait le théorème. Donc $df$ n'est pas différentiable en $0$ (et $f$ n'est pas $C^2$).

### H3 — $U$ ouvert, $E$ et $F$ evn quelconques

**Rôle.** $U$ ouvert permet de prendre une boule $\bar B(a,2\delta)\subset U$ contenant tous les points $a+tu+sv$ utilisés. Aucune complétude de $E$ ou de $F$ n'est utilisée (les accroissements finis valent dans tout evn) : c'est une hypothèse minimale.

## Idée de la preuve

On montre que $g_{u,v}(t,t)/t^2\to d^2f_a(u,v)$ quand $t\to0$ ; comme $g_{u,v}(t,t)=g_{v,u}(t,t)$, la même limite vaut $d^2f_a(v,u)$. Pour l'estimation, on compare $g_{u,v}(t,s)$ à $d^2f_a(tu,sv)$ via l'intermédiaire $df_{a+tu}(sv)-df_a(sv)$, en appliquant les accroissements finis à une fonction auxiliaire de $s$.

## Preuve

Fixons $u,v\in E$ et posons, pour $t,s$ réels assez petits,
$$
g_{u,v}(t,s)=f(a+tu+sv)-f(a+sv)-f(a+tu)+f(a).
$$
Par construction $g_{u,v}(t,s)=g_{v,u}(s,t)$, en particulier $g_{u,v}(t,t)=g_{v,u}(t,t)$. Nous allons montrer que
$$
\lim_{t\to0}\frac{g_{u,v}(t,t)-d^2f_a(tu,tv)}{t^2}=\lim_{t\to0}\frac{g_{u,v}(t,t)}{t^2}-d^2f_a(u,v)=0 \qquad(\ast)
$$
(on a utilisé $d^2f_a(tu,tv)=t^2d^2f_a(u,v)$ par bilinéarité). Le même résultat pour le couple $(v,u)$ donnera $\lim_{t\to0}g_{v,u}(t,t)/t^2=d^2f_a(v,u)$, et l'égalité $g_{u,v}(t,t)=g_{v,u}(t,t)$ conclura : $d^2f_a(u,v)=d^2f_a(v,u)$. Si $u=0$ ou $v=0$, les deux membres sont nuls ; supposons $u\ne0$, $v\ne0$.

**Étape 0 : la différentiabilité de $df$ en $a$.** Soit $\eps>0$. Il existe $\delta>0$ tel que $\bar B(a,2\delta)\subset U$ et, pour tout $x\in E$ avec $\|x\|_E\le2\delta$,
$$
\big\|d^2f_a(x,\cdot)-df_{a+x}+df_a\big\|_{\mathcal L(E;F)}\le\eps\|x\|_E . \qquad\text{(V.5.1)}
$$
(Ici $d^2f_a(x,\cdot)=d(df)_a(x)\in\mathcal L(E;F)$ ; c'est la définition de la différentiabilité de $df$ en $a$ ([[ch05-differentielle-def]]), écrite avec l'identification de [[ch05-isometrie-bilineaire-curryfication]].) Dans toute la suite, $|t|\,\|u\|\le\delta$ et $|s|\,\|v\|\le\delta$, de sorte que $\|tu\|$, $\|sv\|$ et $\|tu+sv\|$ sont $\le2\delta$.

**Étape 1 : comparer $d^2f_a(tu,sv)$ à $df_{a+tu}(sv)-df_a(sv)$.** En appliquant (V.5.1) à $x=tu$ puis en évaluant en $sv$ :
$$
\big\|d^2f_a(tu,sv)-df_{a+tu}(sv)+df_a(sv)\big\|_F\le\eps\|tu\|_E\|sv\|_E=\eps|t||s|\,\|u\|\,\|v\| . \qquad\text{(V.5.2)}
$$

**Étape 2 : comparer $g_{u,v}(t,s)$ à $df_{a+tu}(sv)-df_a(sv)$.** À $t$ fixé, posons, pour $s$ réel,
$$
k(s)=f(a+tu+sv)-f(a+sv)-df_{a+tu}(sv)+df_a(sv).
$$
Par la règle de la chaîne ([[ch05-composition-differentielles]]), $s\mapsto f(a+tu+sv)$ est dérivable de dérivée $df_{a+tu+sv}(v)$, de même pour $s\mapsto f(a+sv)$, et $s\mapsto df_{a+tu}(sv)-df_a(sv)=s\big(df_{a+tu}(v)-df_a(v)\big)$ est linéaire en $s$. Donc
$$
k'(s)=df_{a+tu+sv}(v)-df_{a+sv}(v)-df_{a+tu}(v)+df_a(v).
$$
Grâce à la bilinéarité, $d^2f_a(tu+sv,\cdot)=d^2f_a(tu,\cdot)+d^2f_a(sv,\cdot)$, et l'on peut réécrire
$$
k'(s)=\Big[\big(df_{a+tu+sv}-df_a-d^2f_a(tu+sv,\cdot)\big)-\big(df_{a+tu}-df_a-d^2f_a(tu,\cdot)\big)-\big(df_{a+sv}-df_a-d^2f_a(sv,\cdot)\big)\Big](v)
$$
(en développant, les termes $df_a$ et $d^2f_a$ se compensent exactement). Par (V.5.1) appliqué à $x=tu+sv$, $x=tu$ et $x=sv$ :
$$
\|k'(s)\|_F\le\eps\big(\|tu+sv\|+\|tu\|+\|sv\|\big)\|v\|\le2\eps|t|\,\|u\|\,\|v\|+2\eps|s|\,\|v\|^2 .
$$
Cette borne vaut pour tout $s'$ entre $0$ et $s$ (avec $|s'|\le|s|$, le majorant pour $s$ convient). L'inégalité des accroissements finis à borne constante ([[ch05-accroissements-finis-borne]]), appliquée à $k$ sur l'intervalle d'extrémités $0$ et $s$, donne
$$
\|k(s)-k(0)\|_F\le\big(2\eps|t|\,\|u\|\,\|v\|+2\eps|s|\,\|v\|^2\big)|s| .
$$
Or $k(0)=f(a+tu)-f(a)$, donc
$$
k(s)-k(0)=g_{u,v}(t,s)-df_{a+tu}(sv)+df_a(sv).
$$

**Étape 3 : conclusion.** Par l'inégalité triangulaire, en écrivant $g_{u,v}(t,s)-d^2f_a(tu,sv)=\big(g_{u,v}(t,s)-df_{a+tu}(sv)+df_a(sv)\big)-\big(d^2f_a(tu,sv)-df_{a+tu}(sv)+df_a(sv)\big)$ et en utilisant l'étape 2 et (V.5.2) :
$$
\|g_{u,v}(t,s)-d^2f_a(tu,sv)\|_F\le\eps|t||s|\,\|u\|\,\|v\|+2\eps|t||s|\,\|u\|\,\|v\|+2\eps|s|^2\|v\|^2 .
$$
Pour $s=t$ (avec $0<|t|\le\delta/\max(\|u\|,\|v\|)$) :
$$
\Big\|\frac{g_{u,v}(t,t)}{t^2}-d^2f_a(u,v)\Big\|_F\le\eps\big(3\|u\|\,\|v\|+2\|v\|^2\big).
$$
Comme $\eps>0$ est arbitraire, $(\ast)$ est démontré, et avec lui le théorème. $\square$

## Preuve à trous

Fixons $u,v\in E\setminus\{0\}$ et posons <trou indice="somme alternée de f aux quatre coins d'un parallélogramme">$g_{u,v}(t,s)=f(a+tu+sv)-f(a+sv)-f(a+tu)+f(a)$</trou>, qui vérifie $g_{u,v}(t,t)=g_{v,u}(t,t)$. Il suffit de montrer que $g_{u,v}(t,t)/t^2\to d^2f_a(u,v)$ quand $t\to0$.

Soit $\eps>0$ ; la différentiabilité de $df$ en $a$ donne $\delta>0$ avec $\bar B(a,2\delta)\subset U$ et
$$
\big\|d^2f_a(x,\cdot)-df_{a+x}+df_a\big\|\le\eps\|x\|\qquad(\|x\|\le2\delta).
$$
On prend $|t|\,\|u\|\le\delta$, $|s|\,\|v\|\le\delta$. Avec $x=tu$, évalué en $sv$ : $\|d^2f_a(tu,sv)-df_{a+tu}(sv)+df_a(sv)\|\le\eps|t||s|\|u\|\|v\|$.

On introduit la fonction auxiliaire de $s$ : <trou indice="retrancher à g ce qu'on veut comparer, en gardant f(a+tu+sv) - f(a+sv)">$k(s)=f(a+tu+sv)-f(a+sv)-df_{a+tu}(sv)+df_a(sv)$</trou>, de dérivée $k'(s)=df_{a+tu+sv}(v)-df_{a+sv}(v)-df_{a+tu}(v)+df_a(v)$. En faisant apparaître $d^2f_a(tu+sv,\cdot)=d^2f_a(tu,\cdot)+d^2f_a(sv,\cdot)$ et en appliquant l'estimation précédente en $x=tu+sv$, $tu$, $sv$, on obtient <trou>$\|k'(s)\|\le2\eps|t|\|u\|\|v\|+2\eps|s|\|v\|^2$</trou>. Les <trou indice="quel outil transforme une borne sur k' en borne sur k(s)-k(0) ?">accroissements finis donnent $\|k(s)-k(0)\|\le(2\eps|t|\|u\|\|v\|+2\eps|s|\|v\|^2)|s|$</trou>, et $k(s)-k(0)=g_{u,v}(t,s)-df_{a+tu}(sv)+df_a(sv)$.

Par l'inégalité triangulaire, $\|g_{u,v}(t,s)-d^2f_a(tu,sv)\|\le3\eps|t||s|\|u\|\|v\|+2\eps s^2\|v\|^2$ ; pour $s=t$, <trou>$\big\|g_{u,v}(t,t)/t^2-d^2f_a(u,v)\big\|\le\eps(3\|u\|\|v\|+2\|v\|^2)$</trou>. D'où la limite, et par symétrie de $g$, $d^2f_a(u,v)=d^2f_a(v,u)$. $\square$

## Exemples

* **Dérivées croisées sur $\R^n$ (Exercice V.5.4).** Si $f:U\subset\R^n\to\R$ est $C^2$, alors $d^2f_a(e_i,e_j)=\frac{\partial}{\partial x_i}\Big(\frac{\partial f}{\partial x_j}\Big)(a)$ ([[ch05-differentielle-seconde-def]]), et Schwarz donne $\frac{\partial^2f}{\partial x_i\partial x_j}=\frac{\partial^2f}{\partial x_j\partial x_i}$. Vérification sur $f(x,y)=e^{xy}$ : $\frac{\partial f}{\partial x}=ye^{xy}$, $\frac{\partial}{\partial y}(ye^{xy})=(1+xy)e^{xy}$ ; $\frac{\partial f}{\partial y}=xe^{xy}$, $\frac{\partial}{\partial x}(xe^{xy})=(1+xy)e^{xy}$. Égales.
* **Un cas non commutatif.** $f(A)=A^3$ sur $\mathrm M_n(\R)$. En développant $(A+tU+sV)^3$, $df_A(V)=VA^2+AVA+A^2V$, puis
$$
d^2f_A(U,V)=UVA+UAV+VUA+AUV+VAU+AVU,
$$
somme des six mots contenant une fois chacune des lettres $A,U,V$ : l'expression est bien symétrique en $(U,V)$, bien que les matrices ne commutent pas.
* **Contre-exemple.** $f(x,y)=\frac{xy(x^2-y^2)}{x^2+y^2}$ (voir H2) : $f$ est $C^1$, ses dérivées croisées en $0$ valent $-1$ et $1$ ; c'est que $df$ n'est pas différentiable en $0$.

## Pièges

* > ⚠️ L'existence des dérivées partielles secondes croisées en $a$ **ne suffit pas** : il faut que $df$ soit différentiable en $a$ (par exemple $f$ de classe $C^2$, ou les dérivées partielles secondes continues au voisinage de $a$, ce qui donne $df$ $C^1$ par [[ch05-c1-ssi-partielles-continues]]).
* Le lemme dit que l'**application bilinéaire** $d^2f_a$ est symétrique ; il ne dit rien de l'ordre de dérivation pour des fonctions qui ne sont pas deux fois différentiables.
* Conséquence pratique : $d^2f_a$ est entièrement déterminée par sa forme quadratique $h\mapsto d^2f_a(h,h)$, par polarisation $d^2f_a(u,v)=\frac14\big(d^2f_a(u+v,u+v)-d^2f_a(u-v,u-v)\big)$ (cette identité utilise la symétrie). C'est ce qui rend utiles les formules de Taylor en $d^2f_a(h,h)$ ([[ch05-taylor-young]]).
* Généralisation à l'ordre $p$ : [[ch05-differentielle-ordre-p-symetrique]].
