---
id: ch01-decomposition-r-lineaire
type: lemma
chapter: 1
title: Décomposition $L(\omega)=a\omega+b\bar\omega$ d'une application $\R$-linéaire de $\C$
ref: Lemme I.2.1
page: 6
importance: 2
depends: []
tags: [r-lineaire, c-lineaire, decomposition, conjugaison, algebre-lineaire]
---
## Intuition

> 💡 Vu comme $\R$-espace vectoriel, $\C$ est un plan ; une application **$\R$-linéaire** $L:\C\to\C$ (c'est-à-dire $L(\omega_1+\omega_2)=L(\omega_1)+L(\omega_2)$ et $L(t\omega)=tL(\omega)$ pour $t$ **réel**) est donc une matrice $2\times2$ réelle quelconque : 4 paramètres réels. Le lemme dit que ces 4 paramètres se rangent en **deux nombres complexes** $a,b$ : $L$ est « un morceau qui multiplie par $a$ » plus « un morceau qui conjugue puis multiplie par $b$ ».

Le morceau $\omega\mapsto a\omega$ est la partie **$\C$-linéaire** de $L$ (elle vérifie $L(\lambda\omega)=\lambda L(\omega)$ pour tout $\lambda\in\C$) ; le morceau $\omega\mapsto b\bar\omega$ est la partie **antilinéaire** ($L(\lambda\omega)=\bar\lambda L(\omega)$). Être $\C$-linéaire, c'est exactement ne pas avoir de partie antilinéaire : $b=0$.

C'est l'outil purement algébrique qui va transformer « $df_z$ est $\C$-linéaire » en l'équation $\frac{\partial f}{\partial\bar z}=0$ ([[ch01-operateurs-dz-dzbar]], [[ch01-cauchy-riemann]]).

## Énoncé

**Lemme (poly, Lemme I.2.1, p. 6).** Toute application $\R$-linéaire $L:\C\to\C$ s'écrit de manière unique
$$
L(\omega)=a\,\omega+b\,\bar\omega,\qquad(\omega\in\C),
$$
avec $a,b\in\C$ donnés par
$$
a=\frac12\bigl(L(1)-i\,L(i)\bigr),\qquad b=\frac12\bigl(L(1)+i\,L(i)\bigr).
$$
De plus, $L$ est $\C$-linéaire si et seulement si $b=0$, et elle est alors la multiplication par $a$.

## Hypothèses

### H1 — $L$ est $\R$-linéaire

**Rôle.** Elle sert à écrire, pour $\omega=s+it$ ($s,t$ réels), $L(\omega)=s\,L(1)+t\,L(i)$ : $L$ est déterminée par les deux valeurs $L(1)$, $L(i)$ (car $(1,i)$ est une base de $\C$ sur $\R$).

**Si on la retire.** Toute application $\omega\mapsto a\omega+b\bar\omega$ est $\R$-linéaire ; une application non $\R$-linéaire ne peut donc pas s'écrire ainsi. Exemple : $L(\omega)=|\omega|$. Les formules donnent $L(1)=L(i)=1$, $a=\frac{1-i}2$, $b=\frac{1+i}2$, et $a\omega+b\bar\omega$ coïncide avec $L$ en $\omega=1$ et en $\omega=i$, mais en $\omega=1+i$ :
$$
a(1+i)+b(1-i)=\frac{(1-i)(1+i)}{2}+\frac{(1+i)(1-i)}{2}=2\ne\sqrt2=|1+i|.
$$

## Idée de la preuve

On décompose $\omega=s+it$ avec $s=\frac{\omega+\bar\omega}2$, $t=\frac{\omega-\bar\omega}{2i}$ et on utilise la $\R$-linéarité : $L(\omega)=sL(1)+tL(i)$ ; on regroupe les termes en $\omega$ et en $\bar\omega$. L'unicité se teste en $\omega=1$ et $\omega=i$.

## Preuve

*Existence.* Soit $\omega\in\C$, écrit $\omega=s+it$ avec $s,t\in\R$ ; on a $s=\dfrac{\omega+\bar\omega}{2}$ et $t=\dfrac{\omega-\bar\omega}{2i}$. Par $\R$-linéarité de $L$ (ce sont des scalaires réels qui sortent),
$$
L(\omega)=s\,L(1)+t\,L(i)=\frac{\omega+\bar\omega}{2}L(1)+\frac{\omega-\bar\omega}{2i}L(i).
$$
Comme $\frac1i=-i$, on obtient
$$
L(\omega)=\frac{L(1)-i\,L(i)}{2}\,\omega+\frac{L(1)+i\,L(i)}{2}\,\bar\omega=a\,\omega+b\,\bar\omega .
$$

*Unicité.* Si $a\omega+b\bar\omega=a'\omega+b'\bar\omega$ pour tout $\omega$, alors, avec $\alpha=a-a'$ et $\beta=b-b'$, on a $\alpha\omega+\beta\bar\omega=0$ pour tout $\omega\in\C$. Le choix $\omega=1$ donne $\alpha+\beta=0$, le choix $\omega=i$ donne $i\alpha-i\beta=i(\alpha-\beta)=0$. Donc $\alpha=\beta=0$.

*Caractérisation de la $\C$-linéarité.* Si $b=0$, $L(\omega)=a\omega$ est la multiplication par $a$, qui est $\C$-linéaire. Réciproquement, si $L$ est $\C$-linéaire, alors $L(\omega)=L(\omega\cdot1)=\omega\,L(1)$ pour tout $\omega$ : $L$ coïncide avec la multiplication par $L(1)$, c'est-à-dire $L(\omega)=L(1)\,\omega+0\cdot\bar\omega$. Par unicité de la décomposition, $b=0$ (et $a=L(1)$). $\square$

## Preuve à trous

*Existence.* Pour $\omega=s+it$, on a $s=\dfrac{\omega+\bar\omega}2$ et <trou>$t=\dfrac{\omega-\bar\omega}{2i}$</trou>. Par <trou indice="quelle propriété de L permet de sortir s et t ?">$\R$-linéarité, $L(\omega)=s\,L(1)+t\,L(i)$</trou>, puis en regroupant (avec $1/i=-i$) : $L(\omega)=\frac{L(1)-iL(i)}2\,\omega+\frac{L(1)+iL(i)}2\,\bar\omega$.

*Unicité.* Si $\alpha\omega+\beta\bar\omega=0$ pour tout $\omega$, on teste <trou indice="deux valeurs simples de ω">$\omega=1$ (d'où $\alpha+\beta=0$) et $\omega=i$ (d'où $i(\alpha-\beta)=0$)</trou>, donc $\alpha=\beta=0$.

*$\C$-linéarité.* Si $b=0$, $L$ est la multiplication par $a$. Si $L$ est $\C$-linéaire, <trou indice="écrire ω = ω·1">$L(\omega)=\omega L(1)$ pour tout $\omega$, et l'unicité de la décomposition impose $b=0$</trou>. $\square$

## Exemples

* **Conjugaison.** $L(\omega)=\bar\omega$ : $L(1)=1$, $L(i)=-i$, donc $a=\frac{1-i(-i)}2=\frac{1-1}{2}=0$ et $b=\frac{1+i(-i)}2=1$. On retrouve $L(\omega)=\bar\omega$ ; $b\ne0$ : $\R$-linéaire mais pas $\C$-linéaire.
* **Matrice quelconque.** Si $L$ a pour matrice $\begin{pmatrix}p&q\\ r&u\end{pmatrix}$ dans la base $(1,i)$, alors $L(1)=p+ir$ et $L(i)=q+iu$, d'où
$$
a=\frac{(p+u)+i(r-q)}{2},\qquad b=\frac{(p-u)+i(r+q)}{2}.
$$
Ainsi $b=0\iff p=u$ et $q=-r$ : la matrice est de la forme $\begin{pmatrix}\alpha&-\beta\\ \beta&\alpha\end{pmatrix}$, celle d'une similitude directe ([[ch01-similitude-conforme]]).
* **Un cisaillement.** Matrice $\begin{pmatrix}1&2\\0&1\end{pmatrix}$ ($p=1,q=2,r=0,u=1$) : $a=1-i$, $b=i$. Vérification : $a+b=1=L(1)$ et $ai+b\,\overline{i}=(1-i)i-i\cdot i=i+1+1=2+i=L(i)$.

## Pièges

* > ⚠️ Les formules ont des signes opposés : $a=\frac12(L(1)-iL(i))$, $b=\frac12(L(1)+iL(i))$. Moyen mnémotechnique : pour $L=\id$, $L(1)=1$, $L(i)=i$, il faut $a=1$ ($1-i\cdot i=2$) et $b=0$ ($1+i\cdot i=0$).
* « $\R$-linéaire » et « $\C$-linéaire » ne sont pas synonymes sur $\C$ : la conjugaison est $\R$-linéaire et pas $\C$-linéaire.
* L'unicité porte sur l'identité **pour tout $\omega$** ; pour un $\omega$ fixé, il y a évidemment une infinité de couples $(a,b)$ avec $a\omega+b\bar\omega=L(\omega)$.
* Une application $\C$-linéaire de $\C$ dans $\C$ est **toujours** une multiplication par un nombre complexe ($\C$ est de dimension $1$ sur lui-même) ; c'est cela qu'on utilise dans la réciproque.
