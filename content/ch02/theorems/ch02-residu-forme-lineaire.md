---
id: ch02-residu-forme-lineaire
type: corollary
chapter: 2
title: Le résidu est une forme linéaire
ref: Corollaire II.4.10
page: 45
importance: 1
depends: [ch02-laurent-developpement, ch02-meromorphes-operations, ch02-residu-def]
tags: [residu, linearite, laurent, elements simples]
---
## Intuition

> 💡 Le résidu est « le coefficient de $\frac1{z-z_0}$ » : comme prendre un coefficient est une opération linéaire, le résidu d'une somme est la somme des résidus. Cela permet de découper une fonction compliquée en morceaux simples (décomposition en éléments simples, partie polaire + partie holomorphe) et de calculer le résidu morceau par morceau ; les morceaux holomorphes en $z_0$ ont un résidu nul.

Rappels : $\mathcal M(\Omega)$ est un $\C$-espace vectoriel ([[ch02-meromorphes-operations]]) ; le résidu $\mathrm{res}_{z_0}(f)$ est le coefficient $a_{-1}$ du développement de Laurent de $f$ en $z_0$ ([[ch02-residu-def]]). Une **forme linéaire** sur un $\C$-espace vectoriel $E$ est une application linéaire $E\to\C$.

## Énoncé

**Corollaire (poly, Corollaire II.4.10, p. 45).** Soit $z_0\in\Omega$. L'application $f\mapsto\mathrm{res}_{z_0}(f)$ est une forme linéaire sur l'espace $\mathcal M(\Omega)$ des fonctions méromorphes sur $\Omega$, à valeurs dans $\C$ : pour $f,g\in\mathcal M(\Omega)$ et $\alpha,\beta\in\C$,
$$
\mathrm{res}_{z_0}(\alpha f+\beta g)=\alpha\,\mathrm{res}_{z_0}(f)+\beta\,\mathrm{res}_{z_0}(g).
$$

## Hypothèses

### H1 — Le même point $z_0$ et le même ouvert $\Omega$ pour $f$ et $g$

**Rôle.** On compare les développements de Laurent de $f$, $g$ et $\alpha f+\beta g$ **au même point** $z_0$, sur un disque épointé commun. Le fait que $\alpha f+\beta g$ soit encore méromorphe sur $\Omega$ ([[ch02-meromorphes-operations]]) assure que son résidu en $z_0$ est défini.

**Si on la retire.** Hypothèse de cadre plutôt que de confort : $f\mapsto\mathrm{res}_{z_0}(f)$ dépend du point, et il n'y a pas de relation entre résidus en des points différents ($\frac1z$ a résidu $1$ en $0$ et $0$ en $1$). Sur des ouverts différents, il suffit de restreindre à $\Omega\cap\Omega'$ (le résidu est une notion locale) : la conclusion reste vraie.

## Idée de la preuve

Sur un disque épointé commun, on additionne les développements de Laurent de $f$ et $g$ ; on obtient un développement de Laurent de $\alpha f+\beta g$, qui par unicité est **le** développement de Laurent ; son coefficient d'indice $-1$ est $\alpha a_{-1}+\beta b_{-1}$.

## Preuve

Par la Proposition II.4.6 ([[ch02-laurent-developpement]]), il existe $m_1,m_2\in\N$ et $r_1,r_2>0$ tels que
$$
f(z)=\sum_{n\ge-m_1}a_n(z-z_0)^n\ \text{ sur }D(z_0,r_1)^\times,\qquad g(z)=\sum_{n\ge-m_2}b_n(z-z_0)^n\ \text{ sur }D(z_0,r_2)^\times .
$$
Posons $m=\max(m_1,m_2)$, $r=\min(r_1,r_2)$, et complétons par $a_n=0$ pour $n<-m_1$, $b_n=0$ pour $n<-m_2$. Sur $D(z_0,r)^\times$, les deux séries convergent, donc la série $\sum_{n\ge-m}(\alpha a_n+\beta b_n)(z-z_0)^n$ converge et
$$
(\alpha f+\beta g)(z)=\sum_{n\ge-m}(\alpha a_n+\beta b_n)(z-z_0)^n\qquad(z\in D(z_0,r)^\times).
$$
Or $\alpha f+\beta g$ est méromorphe sur $\Omega$ ([[ch02-meromorphes-operations]]) ; par **unicité** du développement de Laurent (Proposition II.4.6), ce développement est le sien. Son coefficient d'indice $-1$ est $\alpha a_{-1}+\beta b_{-1}$, c'est-à-dire, par la définition [[ch02-residu-def]],
$$
\mathrm{res}_{z_0}(\alpha f+\beta g)=\alpha\,\mathrm{res}_{z_0}(f)+\beta\,\mathrm{res}_{z_0}(g).\qquad\square
$$

## Preuve à trous

On écrit $f=\sum_{n\ge-m_1}a_n(z-z_0)^n$ sur $D(z_0,r_1)^\times$ et $g=\sum_{n\ge-m_2}b_n(z-z_0)^n$ sur $D(z_0,r_2)^\times$. Sur <trou indice="où les deux développements sont-ils valables simultanément ?">$D(z_0,\min(r_1,r_2))^\times$, avec $m=\max(m_1,m_2)$ et des coefficients complétés par $0$</trou>, on a $\alpha f+\beta g=\sum_{n\ge-m}(\alpha a_n+\beta b_n)(z-z_0)^n$. Comme $\alpha f+\beta g\in\mathcal M(\Omega)$, <trou indice="quelle propriété du développement de Laurent permet de conclure ?">l'unicité du développement de Laurent montre que c'est le développement de $\alpha f+\beta g$ en $z_0$</trou>, d'où $\mathrm{res}_{z_0}(\alpha f+\beta g)=\alpha a_{-1}+\beta b_{-1}$. $\square$

## Exemples

* **Éléments simples.** $f(z)=\dfrac1{z^2-1}=\dfrac12\Big(\dfrac1{z-1}-\dfrac1{z+1}\Big)$. En $z_0=1$ : $\frac1{z+1}$ est holomorphe en $1$ (résidu $0$) et $\mathrm{res}_1\frac1{z-1}=1$, donc $\mathrm{res}_1(f)=\frac12$. De même $\mathrm{res}_{-1}(f)=-\frac12$.
* **Somme.** $\mathrm{res}_0\Big(\dfrac{e^z}{z^3}+\dfrac3z\Big)=\mathrm{res}_0\Big(\dfrac{e^z}{z^3}\Big)+3=\dfrac12+3=\dfrac72$ (le coefficient de $z^2$ dans $e^z$ est $\frac12$).
* **Partie polaire.** Si $Q_{z_0}(z)=\sum_{n=-m}^{-1}a_n(z-z_0)^n$ est la partie polaire de $f$ en $z_0$, alors $f-Q_{z_0}$ est holomorphe en $z_0$ (résidu nul) et $\mathrm{res}_{z_0}(f)=\mathrm{res}_{z_0}(Q_{z_0})=a_{-1}$ : c'est l'argument central de la preuve de la formule des résidus ([[ch02-formule-residus]]).

## Pièges

* > ⚠️ Le résidu n'est **pas multiplicatif** : $\mathrm{res}_0\big(\frac1z\cdot\frac1z\big)=\mathrm{res}_0\big(\frac1{z^2}\big)=0$, alors que $\mathrm{res}_0\big(\frac1z\big)^2=1$. Pour un produit, utiliser [[ch02-residu-pole-simple]] (cas d'un pôle simple) ou développer.
* La linéarité est en $f$, à point $z_0$ fixé : il n'y a aucune formule reliant $\mathrm{res}_{z_0}(f)$ et $\mathrm{res}_{z_1}(f)$.
* Une fonction holomorphe en $z_0$ a un résidu nul en $z_0$ : on peut toujours retirer d'une fonction ses morceaux holomorphes en $z_0$ avant de calculer.
