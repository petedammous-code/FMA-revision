---
id: ex-ch01-relations-duplication
type: exercise
chapters: [1]
title: Relations de duplication et rigidité des fonctions holomorphes
source: Inventé
difficulty: 4
time: 75
tools: [ch01-zeros-isoles, ch01-def-multiplicite-zero, ch01-estimees-cauchy, ch01-serie-entiere-derivees-tout-ordre, ch01-serie-entiere-holomorphe, ch01-formules-derivation, ch01-stabilite-operations, ch01-principe-maximum, ch01-liouville, ch01-exp-trigo-hyperboliques]
---
## Énoncé

On note $D=D(0,1)$ le disque unité ouvert. Une **fonction entière** est une fonction holomorphe sur $\C$. On cherche toutes les fonctions holomorphes vérifiant une « relation de duplication », qui relie la valeur en $2z$ (ou en $z^2$) à la valeur en $z$. Les parties A, B, C sont indépendantes ; la partie D se réfère à la partie A.

**Partie A — la relation $f(2z)=f(z)^2$.** Soit $f$ une fonction entière telle que $f(2z)=f(z)^2$ pour tout $z\in\C$.

* A1. Montrer que $f(0)\in\{0,1\}$.
* A2. On suppose qu'il existe $z_0\ne0$ tel que $f(z_0)=0$. Montrer que $f$ est identiquement nulle.
* A3. On suppose que $f(0)=0$ et que $f$ n'est pas identiquement nulle ; soit $m\ge1$ la multiplicité du zéro $0$. Aboutir à une contradiction. En déduire que si $f\not\equiv0$, alors $f$ ne s'annule pas sur $\C$ et $f(0)=1$.
* A4. On suppose $f\not\equiv0$ et l'on pose $g=f'/f$. Montrer que $g$ est entière et que $g(2z)=g(z)$ pour tout $z\in\C$. En déduire qu'il existe $c\in\C$ tel que $f(z)=e^{cz}$ pour tout $z$. Déterminer toutes les solutions.

**Partie B — la relation $f(2z)=2f(z)^2-1$.** Soit $f$ une fonction entière telle que $f(2z)=2f(z)^2-1$ pour tout $z\in\C$.

* B1. Vérifier que, pour tout $c\in\C$, la fonction $z\mapsto\cos(cz)$ est solution, ainsi que la fonction constante $-\frac12$.
* B2. On écrit $f(z)=\sum_{n\ge0}a_nz^n$. Justifier que ce développement est valable pour tout $z\in\C$. Montrer que $a_0\in\{1,-\frac12\}$ et que, pour tout $n\ge1$,
$$
(2^n-4a_0)\,a_n=2\sum_{k=1}^{n-1}a_ka_{n-k}\qquad(\text{somme vide, donc nulle, si } n=1).
$$
* B3. Montrer que si $a_0=-\frac12$, alors $f$ est constante.
* B4. On suppose $a_0=1$. Montrer que $a_1=0$ et que tous les coefficients $a_n$ sont déterminés par la seule valeur de $a_2$. En déduire qu'il existe $c\in\C$ tel que $f(z)=\cos(cz)$ pour tout $z$, et conclure.
* B5. Parmi les solutions de la partie B, lesquelles sont bornées sur $\C$ ? Lesquelles sont bornées sur $\R$ ?

**Partie C — la relation $f(z^2)=f(z)^2$ sur le disque.** Soit $f\in\Hol(D)$, non identiquement nulle, telle que $f(z^2)=f(z)^2$ pour tout $z\in D$.

* C1. Montrer qu'il existe $m\in\N$ et $h\in\Hol(D)$ tels que $f(z)=z^mh(z)$ sur $D$, $h(0)=1$ et $h(z^2)=h(z)^2$ pour tout $z\in D$.
* C2. Montrer que $|h(z)|=1$ pour tout $z\in D$.
* C3. Déterminer toutes les fonctions $f\in\Hol(D)$ vérifiant $f(z^2)=f(z)^2$ sur $D$.

**Partie D — sans holomorphie.** On note $\log_2|x|=\ln|x|/\ln2$ et l'on définit $\varphi:\R\to\R$ par $\varphi(0)=1$ et
$$
\varphi(x)=\exp\Bigl(x\,\bigl(2+\sin(2\pi\log_2|x|)\bigr)\Bigr)\qquad(x\ne0).
$$
* D1. Montrer que $\varphi$ est continue et strictement positive sur $\R$ et que $\varphi(2x)=\varphi(x)^2$ pour tout $x\in\R$.
* D2. Montrer qu'il n'existe aucun $c\in\R$ tel que $\varphi(x)=e^{cx}$ pour tout $x\in\R$. Quelle étape du raisonnement de la partie A ne s'applique pas à $\varphi$ ?

## Indices

### Indice 1
Dans les parties A et C, **itérer la relation vers $0$** : en A, $z\mapsto z/2$ fait converger n'importe quel point vers $0$ ; en C, c'est $z\mapsto z^{2^k}$. Les informations (zéros, valeurs de $g$, module de $h$) se propagent alors vers l'origine, où l'on utilise la continuité.

### Indice 2
Outils : le principe des zéros isolés (une fonction holomorphe non nulle sur un ouvert connexe n'a pas de zéros qui s'accumulent en un point de l'ouvert) ; la factorisation $f(z)=z^mh(z)$, $h(0)\ne0$ ; l'unicité des coefficients d'une série entière ; le principe du maximum (pour C3).

### Indice 3
B2 : produit de Cauchy $f(z)^2=\sum_n\bigl(\sum_{k=0}^na_ka_{n-k}\bigr)z^n$ ; les termes $k=0$ et $k=n$ donnent $2a_0a_n$. B4 : pour $a_0=1$, le coefficient $2^n-4$ ne s'annule que pour $n=2$ ; tout nombre complexe $-2a_2$ est un carré $c^2$.

### Indice 4
C2 : $h(z)^{2^k}=h(z^{2^k})\to h(0)=1$ ; une suite $q^{2^k}$ avec $q\ge0$ ne tend vers $1$ que si $q=1$. D2 : $\varphi$ est-elle dérivable en $0$ ?

## Corrigé

### Partie A

**A1.** En $z=0$ : $f(0)=f(0)^2$, donc $f(0)(f(0)-1)=0$ et $f(0)\in\{0,1\}$.

**A2.** Si $f(w)=0$, alors $f(w/2)^2=f(2\cdot\frac w2)=f(w)=0$, donc $f(w/2)=0$. Par récurrence, $f(z_0/2^k)=0$ pour tout $k\in\N$. Les points $z_0/2^k$ sont deux à deux distincts (car $z_0\ne0$) et tendent vers $0$ ; par continuité $f(0)=0$, et $0$ est un zéro **non isolé** de $f$. Comme $\C$ est connexe, le principe des zéros isolés ([[ch01-zeros-isoles]]) impose $f\equiv0$.

**A3.** $f\not\equiv0$ sur le connexe $\C$ et $f(0)=0$ : la multiplicité $m\ge1$ est bien définie et $f(z)=z^mh(z)$ sur un disque $D(0,\eps)$, avec $h$ holomorphe sur $D(0,\eps)$ et $h(0)\ne0$ ([[ch01-def-multiplicite-zero]]). Pour $|z|<\eps/2$, on a $2z\in D(0,\eps)$ et la relation donne
$$
2^mz^m\,h(2z)=z^{2m}\,h(z)^2,\qquad\text{donc}\qquad 2^m\,h(2z)=z^m\,h(z)^2\quad(0<|z|<\eps/2).
$$
En faisant $z\to0$ (continuité de $h$) : $2^mh(0)=0$, ce qui contredit $h(0)\ne0$.

Conclusion : si $f\not\equiv0$, alors $f(0)\ne0$ (par A3), donc $f(0)=1$ (par A1), et $f$ n'a aucun zéro $z_0\ne0$ (par A2) : $f$ ne s'annule pas sur $\C$.

**A4.** $f'$ est entière ([[ch01-holomorphe-analytique]]) et $f$ ne s'annule pas, donc $g=f'/f$ est entière ([[ch01-stabilite-operations]]). En dérivant $f(2z)=f(z)^2$ par la règle de la chaîne ([[ch01-formules-derivation]]) : $2f'(2z)=2f(z)f'(z)$. Donc
$$
g(2z)=\frac{f'(2z)}{f(2z)}=\frac{f(z)f'(z)}{f(z)^2}=\frac{f'(z)}{f(z)}=g(z)\qquad(z\in\C).
$$
Par récurrence $g(z)=g(z/2^k)$ pour tout $k$, et $z/2^k\to0$ ; par continuité de $g$ en $0$, $g(z)=g(0)$. Ainsi $g$ est constante, égale à $c:=g(0)=f'(0)$.

Alors $u(z)=f(z)e^{-cz}$ est entière, de dérivée $u'=(f'-cf)e^{-cz}=0$. Son développement en série entière en $0$, valable sur $\C$ ([[ch01-estimees-cauchy]], $\rho(0)=+\infty$), a tous ses coefficients d'ordre $\ge1$ nuls ($u^{(n)}=0$ pour $n\ge1$) : $u$ est constante, égale à $u(0)=f(0)=1$. Donc $f(z)=e^{cz}$.

Réciproquement, $e^{c\cdot2z}=(e^{cz})^2$ ([[ch01-exp-trigo-hyperboliques]]). **Les solutions de A sont la fonction nulle et les $z\mapsto e^{cz}$, $c\in\C$.**

### Partie B

**B1.** Pour $w\in\C$, par définition $\cos w=\frac{e^{iw}+e^{-iw}}2$, donc
$$
2\cos^2w-1=2\cdot\frac{e^{2iw}+2+e^{-2iw}}{4}-1=\frac{e^{2iw}+e^{-2iw}}{2}=\cos(2w) .
$$
Avec $w=cz$ : $\cos(c\cdot2z)=2\cos^2(cz)-1$. Pour la constante $\kappa=-\frac12$ : $2\kappa^2-1=\frac12-1=-\frac12=\kappa$.

**B2.** $f$ étant entière, [[ch01-estimees-cauchy]] avec $z_0=0$ et $\rho(0)=+\infty$ donne $f(z)=\sum_{n\ge0}a_nz^n$ pour tout $z\in\C$, avec $a_n=f^{(n)}(0)/n!$. Alors $f(2z)=\sum_n2^na_nz^n$, et, par produit de Cauchy de deux séries absolument convergentes,
$$
f(z)^2=\sum_{n\ge0}c_nz^n,\qquad c_n=\sum_{k=0}^na_ka_{n-k}=2a_0a_n+\sum_{k=1}^{n-1}a_ka_{n-k}\quad(n\ge1),\qquad c_0=a_0^2 .
$$
Les deux membres de $f(2z)=2f(z)^2-1$ sont des séries entières de rayon infini égales sur $\C$ ; leurs coefficients sont égaux, puisque le coefficient d'ordre $n$ d'une série entière $S$ est $S^{(n)}(0)/n!$ ([[ch01-serie-entiere-derivees-tout-ordre]]). D'où :
* ordre $0$ : $a_0=2a_0^2-1$, soit $(2a_0+1)(a_0-1)=0$, donc $a_0\in\{1,-\frac12\}$ ;
* ordre $n\ge1$ : $2^na_n=2c_n=4a_0a_n+2\sum_{k=1}^{n-1}a_ka_{n-k}$, ce qui est la relation demandée.

**B3.** Si $a_0=-\frac12$ : $(2^n+2)\,a_n=2\sum_{k=1}^{n-1}a_ka_{n-k}$ avec $2^n+2\ne0$. Pour $n=1$, $4a_1=0$. Si $a_1=\dots=a_{n-1}=0$, le membre de droite est nul, donc $a_n=0$. Par récurrence, $a_n=0$ pour tout $n\ge1$ : $f\equiv-\frac12$.

**B4.** Si $a_0=1$ : $(2^n-4)\,a_n=2\sum_{k=1}^{n-1}a_ka_{n-k}$.
* $n=1$ : $-2a_1=0$, donc $a_1=0$.
* $n=2$ : $0\cdot a_2=2a_1^2=0$ : aucune contrainte sur $a_2$.
* $n\ge3$ : $2^n-4\ne0$ et $a_n=\frac{2}{2^n-4}\sum_{k=1}^{n-1}a_ka_{n-k}$ est déterminé par $a_1,\dots,a_{n-1}$.

Par récurrence, deux solutions $f,\tilde f$ telles que $a_0=\tilde a_0=1$ et $a_2=\tilde a_2$ ont tous leurs coefficients égaux, donc sont égales sur $\C$. Soit $c\in\C$ tel que $c^2=-2a_2$ (tout nombre complexe $re^{i\theta}$ a pour racine carrée $\sqrt r\,e^{i\theta/2}$). La fonction $z\mapsto\cos(cz)=\sum_{j\ge0}(-1)^j\frac{c^{2j}z^{2j}}{(2j)!}$ est solution (B1), de coefficients d'ordre $0$ et $2$ égaux à $1$ et $-\frac{c^2}2=a_2$. Donc $f(z)=\cos(cz)$.

**Les solutions de B sont la constante $-\frac12$ et les $z\mapsto\cos(cz)$, $c\in\C$** (la constante $1$ correspond à $c=0$ ; $\cosh z=\cos(iz)$ en fait partie).

**B5.** *Sur $\C$.* Une solution bornée sur $\C$ est constante par le théorème de Liouville ([[ch01-liouville]]). Pour $c\ne0$, $\cos(cz)$ n'est pas constante (son coefficient d'ordre $2$ est $-c^2/2\ne0$). Les solutions bornées sur $\C$ sont donc $-\frac12$ et $1$.

*Sur $\R$.* Écrivons $c=a+ib$ ($a,b$ réels) et $x\in\R$. Comme $\cos(u+iv)=\cos u\cosh v-i\sin u\sinh v$, on a $|\cos(u+iv)|^2=\cos^2u+\sinh^2v$, donc $|\cos(cx)|^2=\cos^2(ax)+\sinh^2(bx)$. Si $b\ne0$, cela tend vers $+\infty$ quand $x\to+\infty$ ; si $b=0$, c'est $\le1$. Les solutions bornées sur $\R$ sont $-\frac12$ et les $\cos(cz)$ avec $c\in\R$.

### Partie C

**C1.** Si $f(0)\ne0$, on prend $m=0$ et $h=f$. Sinon, $f\not\equiv0$ sur le connexe $D$ et $0$ est un zéro de multiplicité $m\ge1$ ([[ch01-def-multiplicite-zero]]). Sur $D$ on a $f(z)=\sum_{n\ge m}a_nz^n$ ([[ch01-estimees-cauchy]], $\rho(0)=1$) avec $a_m\ne0$ ; la série $h(z)=\sum_{n\ge m}a_nz^{n-m}$ a le même rayon ($\ge1$), donc $h\in\Hol(D)$ ([[ch01-serie-entiere-holomorphe]]), $h(0)=a_m\ne0$ et $f(z)=z^mh(z)$ sur $D$.

Pour $z\in D$, $z^2\in D$ et la relation s'écrit $z^{2m}h(z^2)=z^{2m}h(z)^2$, donc $h(z^2)=h(z)^2$ pour $z\ne0$, puis aussi en $z=0$ par continuité. En $z=0$ : $h(0)=h(0)^2$ avec $h(0)\ne0$, donc $h(0)=1$.

**C2.** Par récurrence sur $k$, $h(z^{2^k})=h(z)^{2^k}$ : c'est vrai pour $k=0$, et si c'est vrai pour $k$, alors $h(z^{2^{k+1}})=h\bigl((z^{2^k})^2\bigr)=h(z^{2^k})^2=h(z)^{2^{k+1}}$. Fixons $z\in D$ et posons $q=|h(z)|\ge0$. Comme $|z|<1$, $z^{2^k}\to0$, donc par continuité $q^{2^k}=|h(z^{2^k})|\to|h(0)|=1$. Or si $q<1$, $q^{2^k}\to0$, et si $q>1$, $q^{2^k}\to+\infty$. Donc $q=1$ : $|h(z)|=1$ pour tout $z\in D$.

**C3.** $|h|$ est constante égale à $1$ sur $D$, donc admet un maximum (local) en $0$ ; $D$ est connexe, donc $h$ est constante par le principe du maximum ([[ch01-principe-maximum]]), égale à $h(0)=1$. Ainsi $f(z)=z^m$. Réciproquement, $(z^2)^m=(z^m)^2$. **Les solutions sont la fonction nulle et les monômes $z\mapsto z^m$, $m\in\N$** (pour $m=0$, la constante $1$).

### Partie D

**D1.** Pour $x\ne0$, $\varphi$ est continue (composée de fonctions continues sur $\R^*$) et $\varphi(x)>0$ (exponentielle réelle). En $0$ : $|x(2+\sin(2\pi\log_2|x|))|\le3|x|\to0$, donc $\varphi(x)\to e^0=1=\varphi(0)$. Pour $x\ne0$, $\log_2|2x|=1+\log_2|x|$ et $\sin$ est $2\pi$-périodique, donc
$$
\varphi(2x)=\exp\Bigl(2x\bigl(2+\sin(2\pi\log_2|x|+2\pi)\bigr)\Bigr)=\exp\Bigl(2x\bigl(2+\sin(2\pi\log_2|x|)\bigr)\Bigr)=\varphi(x)^2 ,
$$
et en $x=0$ : $\varphi(0)=1=\varphi(0)^2$.

**D2.** Si $\varphi(x)=e^{cx}$ pour tout $x$, en prenant le logarithme réel, $x(2+\sin(2\pi\log_2x))=cx$ pour $x>0$, donc $\sin(2\pi\log_2x)=c-2$ serait constant sur $]0,+\infty[$ ; or il vaut $0$ en $x=1$ et $1$ en $x=2^{1/4}$. Contradiction.

Les étapes A1–A3 sont sans objet ($\varphi>0$, $\varphi(0)=1$). L'étape A4 passe aux dérivées : pour $x\ne0$, $\psi=\ln\varphi$ vérifie bien $\psi'(2x)=\psi'(x)$, mais l'argument $\psi'(x)=\psi'(x/2^k)\to\psi'(0)$ exige que $\varphi$ soit **dérivable en $0$** (avec $\varphi'/\varphi$ continue en $0$). Or
$$
\frac{\varphi(x)-1}{x}=\frac{e^{\psi(x)}-1}{\psi(x)}\cdot\bigl(2+\sin(2\pi\log_2|x|)\bigr)\qquad(x\ne0),
$$
où le premier facteur tend vers $1$ (car $\psi(x)\to0$ et $\psi(x)\ne0$) et le second vaut $2$ en $x=2^{-k}$ et $3$ en $x=2^{-k+1/4}$ : il n'a pas de limite en $0$, et $\varphi$ n'est pas dérivable en $0$. Une fonction holomorphe, elle, est dérivable (et même analytique) en $0$ : c'est exactement ce qui rend la relation de duplication si contraignante dans le cas holomorphe.

## Pièges et variantes

* En A2, ne pas oublier de dire que les zéros $z_0/2^k$ sont **distincts** et s'accumulent en un point **de l'ouvert** ($0\in\C$) ; et en A3, que l'accumulation des zéros ne sert pas (le seul zéro possible est $0$) : il faut l'argument de multiplicité.
* En A4, la relation $g(2z)=g(z)$ seule ne donne rien sans la **continuité de $g$ en $0$** (voir la partie D). Diviser par $f$ n'est permis qu'après avoir montré que $f$ ne s'annule pas.
* En B2, l'identification des coefficients repose sur l'unicité du développement en série entière (coefficients $=$ dérivées en $0$ divisées par $n!$), pas sur une « égalité de polynômes ».
* En B4, inutile de « résoudre » la récurrence : on montre l'**unicité** à $a_2$ fixé, puis on **exhibe** une solution ayant ce $a_2$. Ce schéma unicité + existence est très fréquent.
* En C2, le passage à la limite utilise $|z|<1$ : sur un disque plus grand que $D$, la relation $f(z^2)=f(z)^2$ n'aurait pas de sens (car $z^2$ sortirait du domaine).
* Variante : les $f\in\Hol(D)$ telles que $f(z^3)=f(z)^3$ sont $0$ et $\pm z^m$ ($h(0)^3=h(0)$, $h(0)\ne0$ donne $h(0)=\pm1$).
* Variante : si $f$ est seulement holomorphe sur un disque $D(0,R)$ avec $f(2z)=f(z)^2$ pour $|z|<R/2$, la preuve de la partie A s'adapte mot pour mot et donne encore $f=0$ ou $f(z)=e^{cz}$ sur $D(0,R)$.
* Variante réelle : une solution $\varphi:\R\to\,]0,+\infty[$ **de classe $C^1$** de $\varphi(2x)=\varphi(x)^2$ est de la forme $e^{cx}$ (même preuve que A4) ; la partie D montre que la simple continuité ne suffit pas.
